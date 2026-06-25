import { Component } from '@angular/core';
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
          console.log("filter Config data of facade :", filterConfig);
          this.filterConfig = filterConfig;
        },

        error: (error) => {
          console.error('Error receiving Filter Config:', error);
        }
      });

    this.facade.tableData$
      .pipe(takeUntil(this.destroy$))
      // .subscribe({
      //   next: (tableData) => {
      //     console.log("filter table data of facade :", tableData);
      //     this.ELEMENT_DATA = tableData;
      //   },

      //   error: (error) => {
      //     console.error('Error receiving Filter Config:', error);
      //   }
      .subscribe(data => {
        console.log("filter data of facade :", data);
        this.facade.setData(data ?? []);
      });

    this.facade.filteredData$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {

          console.log('GRID UPDATE:', data);
          this.pagedData = data;
          this.ELEMENT_DATA = [...(data ?? [])].slice(0, 10);
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
    console.log('More filters saved:', filters);

    this.moreFilters = filters;
  }

  onTopFilterSearch(filters: any) {
    console.log('Top filters search:', filters);

    this.topFilters = filters;

    const finalFilters = {
      ...this.topFilters,
      ...this.moreFilters
    };

    console.log('Combined filters:', finalFilters);

    this.facade.updateFilters(finalFilters);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
