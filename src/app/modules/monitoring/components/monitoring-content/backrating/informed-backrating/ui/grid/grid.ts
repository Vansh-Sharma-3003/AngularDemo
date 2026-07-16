import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, inject, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from "@angular/router";
import { INFORMED_TABLE_DATA } from '../../../../../../../../model/ui/table-data';
import { INFORMED_FILTER_CONFIG_DATA } from '../../../../../../services/informed-mock-data';

@Component({
  selector: 'app-grid',
  imports: [MatTableModule, MatSortModule],
  templateUrl: './grid.html',
  styleUrl: './grid.css',
})
export class Grid {

  private _liveAnnouncer = inject(LiveAnnouncer);

  @Input() ELEMENT_DATA: INFORMED_TABLE_DATA[] = [];

  readonly FILTERS = INFORMED_FILTER_CONFIG_DATA;

  displayedColumns: string[] = [
    'responseId',
    'candidateId',
    'name',
    'leader',
    'feedback',
    'responseType',
    'status',
    'priority'
  ];

  dataSource = new MatTableDataSource<INFORMED_TABLE_DATA>();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router) { }

  ngOnInit() {
    this.dataSource.data = this.ELEMENT_DATA;
    console.log(this.ELEMENT_DATA);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['ELEMENT_DATA']) {
      this.dataSource.data = this.ELEMENT_DATA;
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onClick(responseId: string, responseStatus: string) {
    this.router.navigate(['/response'], {
      state: {
        responseId: responseId,
        responseStatus: responseStatus
      }
    });
  }
}
