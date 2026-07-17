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
import { GridColumn, MOCK_TABLE_DATA } from '../../../../model/ui/table-data';
import { SEARCH_FIELDS_MOCK_DATA } from '../../services/search-mock-data';
import { Router } from '@angular/router';


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

  pageState !: PageEvent;

  private destroy$ = new Subject<void>();

  readonly FILTERS = SEARCH_FIELDS_MOCK_DATA;

  columns: GridColumn<MOCK_TABLE_DATA>[] = [

{
 columnDef:'responseId',
 header:'Response ID',
 clickable:true,
 cell:(row)=>row.responseId
},


{
 columnDef:'candidateId',
 header:'Candidate ID'
},


{
 columnDef:'name',
 header:'Name'
},


{
 columnDef:'leader',
 header:'Leader',
 cell:(row)=>this.FILTERS.leader[row.leader]
},


{
 columnDef:'teamLeader',
 header:'Team Leader',
 cell:(row)=>this.FILTERS.teamLeader[row.teamLeader]
},


{
 columnDef:'queueType',
 header:'Queue Type',
 cell:(row)=>this.FILTERS.queueTpye[row.queueType]
},


{
 columnDef:'feedback',
 header:'Feedback',
 cell:(row)=>this.FILTERS.feedback[row.feedback]
},


{
 columnDef:'searchResult',
 header:'Search Result',
 cell:(row)=>this.FILTERS.searchResult[row.searchResult]
},


{
 columnDef:'searchType',
 header:'Search Type',
 cell:(row)=>this.FILTERS.searchType[row.searchType]
},


{
 columnDef:'responseType',
 header:'Response Type'
},


{
 columnDef:'status',
 header:'Status',
 cell:(row)=>this.FILTERS.status[row.status]
}

];

  constructor(
    private facade: SearchFacadeService,
    private searchService: SearchService,
    private router: Router
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

  openDetails(row: MOCK_TABLE_DATA) {

  this.router.navigate(
    ['/response'],
    {
      queryParams:{
        status: this.FILTERS.status[row.status]
      }
    }
  );

}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
}

