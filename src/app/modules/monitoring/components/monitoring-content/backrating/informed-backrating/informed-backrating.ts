import { Component } from '@angular/core';
import { MatSidenavContainer } from "@angular/material/sidenav";
import { InformedFilterConfig } from '../../../../../../model/ui/form-control';
import { GridColumn, INFORMED_TABLE_DATA } from '../../../../../../model/ui/table-data';
import { Pagenator } from "../../../../../../shared/components/ui/pagenator/pagenator";
import { PageEvent } from '@angular/material/paginator';
import { Subject, takeUntil } from 'rxjs';
import { MonitoringFacadeService } from '../../../../services/monitoring-facade-service';
import { MonitoringService } from '../../../../services/monitoring-service';
import { MoreFilters } from "./more-filters/more-filters";
import { TopFilters } from './top-filters/top-filters';
import { INFORMED_FILTER_CONFIG_DATA } from '../../../../services/informed-mock-data';
import { Router } from '@angular/router';
import { Grid } from '../../../../../../shared/components/ui/grid/grid';

@Component({
  selector: 'app-informed-backrating',
  imports: [MatSidenavContainer, Grid, Pagenator, MoreFilters, TopFilters],
  templateUrl: './informed-backrating.html',
  styleUrl: './informed-backrating.css',
})
export class InformedBackrating {
  

  ELEMENT_DATA: INFORMED_TABLE_DATA[] = [];

  pagedData: INFORMED_TABLE_DATA[] | null = [];

  filterConfig: InformedFilterConfig | null = null;

  pageState !: PageEvent;

  private destroy$ = new Subject<void>();

  readonly FILTERS = INFORMED_FILTER_CONFIG_DATA;

  columns: GridColumn<INFORMED_TABLE_DATA>[] = [

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
 columnDef:'nameId',
 header:'Name'
},

{
 columnDef:'leader',
 header:'Leader',
 cell:(row)=>this.FILTERS.leader[row.leader]
},

{
 columnDef:'feedback',
 header:'Feedback',
 cell:(row)=>this.FILTERS.feedback[row.feedback]
},

{
 columnDef:'responseType',
 header:'Response Type'
},

{
 columnDef:'status',
 header:'Status',
  cell:(row)=>this.FILTERS.status[row.status]
},

{
 columnDef:'priority',
 header:'Priority',
  cell:(row)=>this.FILTERS.priority[row.priority]
}

];

  constructor(
    private facade: MonitoringFacadeService,
    private Service: MonitoringService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pageState = this.facade.getPageState();
    this.setUpSubscriber();
    this.Service.loadFilterConfig();
    this.Service.loadTableData();
  }

  setUpSubscriber() {
    this.facade.informedFilterConfig$
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

  openDetails(row: INFORMED_TABLE_DATA) {

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
