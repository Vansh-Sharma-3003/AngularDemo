import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, inject, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MOCK_TABLE_DATA } from '../../../../model/ui/table-data';
import { SEARCH_FIELDS_MOCK_DATA } from '../../../../modules/search/services/search-mock-data';

@Component({
  selector: 'app-grid',
  imports: [MatTableModule, MatSortModule],
  templateUrl: './grid.html',
  styleUrl: './grid.css',
})
export class Grid {

  private _liveAnnouncer = inject(LiveAnnouncer);

  @Input() ELEMENT_DATA: MOCK_TABLE_DATA[]=[];

  readonly FILTERS = SEARCH_FIELDS_MOCK_DATA;

  displayedColumns: string[] = [
  'responseId',
  'candidateId',
  'name',
  'leader',
  'teamLeader',
  'queueType',
  'feedback',
  'searchResult',
  'searchType',
  'responseType',
  'status'
];

  dataSource = new MatTableDataSource<MOCK_TABLE_DATA>();

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(){
    this.dataSource.data=this.ELEMENT_DATA;
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

}
