import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavContainer } from "@angular/material/sidenav";
import { MoreFilters } from '../more-filters/more-filters';
import { TopFilters } from "../top-filters/top-filters";
import { Subject, takeUntil } from 'rxjs';
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

  ELEMENT_DATA: MOCK_TABLE_DATA[] = [];

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
    this.searchService.loadFilterData();
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

    this.facade.filterData$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (fiterData) => {
          this.pagedData = fiterData;
          this.ELEMENT_DATA = (fiterData ?? []).slice(0, 5);
        },

        error: (error) => {
          console.error('Error receiving Filter Config:', error);
        }
      });
  }

  onSubmit() {
    console.log('Search value:');
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

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
