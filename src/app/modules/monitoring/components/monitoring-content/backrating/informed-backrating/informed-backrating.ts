import { Component } from '@angular/core';
import { MatSidenavContainer } from "@angular/material/sidenav";
import { FilterConfig } from '../../../../../../model/ui/form-control';
import { TopFilters } from '../../../../../search/components/top-filters/top-filters';
import { MoreFilters } from '../../../../../search/components/more-filters/more-filters';
import { Grid } from "../../../../../../shared/components/ui/grid/grid";
import { MOCK_TABLE_DATA } from '../../../../../../model/ui/table-data';
import { Pagenator } from "../../../../../../shared/components/ui/pagenator/pagenator";
import { PageEvent } from '@angular/material/paginator';
import { Subject, takeUntil } from 'rxjs';
import { SearchFacadeService } from '../../../../../search/services/search-facade-service';
import { SearchService } from '../../../../../search/services/search-service';

@Component({
  selector: 'app-informed-backrating',
  imports: [MatSidenavContainer, TopFilters, MoreFilters, Grid, Pagenator],
  templateUrl: './informed-backrating.html',
  styleUrl: './informed-backrating.css',
})
export class InformedBackrating {
  

  ELEMENT_DATA: MOCK_TABLE_DATA[] = [];

  pagedData: MOCK_TABLE_DATA[] | null = [];

  filterConfig: FilterConfig | null = null;

  pageState !: PageEvent;

  private destroy$ = new Subject<void>();

  constructor(
    private facade: SearchFacadeService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.pageState = this.facade.getPageState();
    this.setUpSubscriber();
    this.searchService.loadFilterConfig();
    this.searchService.loadTableData();

  }

  setUpSubscriber() {
    this.facade.filterConfig$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (filterConfig) => {
          this.filterConfig = filterConfig;
        },

        error: (error) => {
          console.error('Error receiving Filter Config:', error);
        }
      });

    this.facade.tableData$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.facade.setData(data ?? []);
      });

    this.facade.filteredData$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.pagedData = data;
          this.updateTableData();
        },
        error: (error) => {
          console.error('Error receiving filtered data:', error);
        }
      });

    this.facade.pageState$
      .pipe(takeUntil(this.destroy$))
      .subscribe(page =>{

        this.pageState = page;

        this.updateTableData();
      });

    this.facade.search$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {

        const finalFilters = {
          ...this.facade.getTopFilters(),
          ...this.facade.getMoreFilters()
        };

        this.facade.resetPage();
        this.facade.updateFilters(finalFilters);

      });

    this.facade.reset$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.facade.setTopFilters({});
        this.facade.setMoreFilters({});

        this.facade.resetPage();
        this.facade.updateFilters({});

      });

  }

  onPageChange(event: PageEvent) {
    this.facade.setPageState(event);
  }

  private updateTableData() {

    const page = this.facade.getPageState();

    const start = page.pageIndex * page.pageSize;
    const end = start + page.pageSize;

    this.ELEMENT_DATA = (this.pagedData ?? []).slice(start, end);

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
