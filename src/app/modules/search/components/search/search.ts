import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavContainer } from "@angular/material/sidenav";
import { MoreFilters } from '../more-filters/more-filters';
import { TopFilters } from "../top-filters/top-filters";
import { Subject, take, takeUntil } from 'rxjs';
import { SearchFacadeService } from '../../services/search-facade-service';
import { SearchService } from '../../services/search-service';
import { FilterConfig } from '../../../../model/ui/form-control';
import { Grid } from "../../../../shared/components/ui/grid/grid";
import { Pagenator } from "../../../../shared/components/ui/pagenator/pagenator";
import { PageEvent } from '@angular/material/paginator';
import { MOCK_TABLE_DATA } from '../../../../model/ui/table-data';




@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule, MatMenuModule, MatSidenavContainer, MoreFilters, TopFilters, Grid, Pagenator],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {

  topFilters: any = {};
  moreFilters: any = {};

  @ViewChild(TopFilters)
topFiltersComponent!: TopFilters;

@ViewChild(MoreFilters)
moreFiltersComponent!: MoreFilters;

  ELEMENT_DATA: MOCK_TABLE_DATA[] | null = [];

  pagedData: MOCK_TABLE_DATA[] | null = [];

  filterConfig: FilterConfig | null = null;

  private destroy$ = new Subject<void>();

  constructor(
    private facade: SearchFacadeService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
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
          this.ELEMENT_DATA = (data ?? []).slice(0, 10);
        },
        error: (error) => {
          console.error('Error receiving filtered data:', error);
        }
      });
  }


  onPageChange(event: PageEvent) {
    console.log(event);
    const start =
      event.pageIndex * event.pageSize;

    const end =
      start + event.pageSize;


    this.ELEMENT_DATA =
      (this.pagedData ?? []).slice(start, end);
    console.log(this.ELEMENT_DATA);

    console.log(start, end);
    console.log((this.pagedData ?? []).slice(start, end));
  }

  onMoreFilterApply(filters: any) {
    this.moreFilters = filters;
  }

  onTopFilterSearch(filters: any) {
    this.topFilters = filters;

    const finalFilters = {
      ...this.topFilters,
      ...this.moreFilters
    };

    this.facade.updateFilters(finalFilters);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onReset() {
  this.topFiltersComponent.resetForm();
  this.moreFiltersComponent.resetForm();

  this.topFilters = {};
  this.moreFilters = {};

  this.facade.updateFilters({});
}
}

