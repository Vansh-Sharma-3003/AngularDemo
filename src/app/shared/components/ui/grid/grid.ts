
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { GridColumn, MOCK_TABLE_DATA } from '../../../../model/ui/table-data';
@Component({
  selector: 'app-grid',
  imports: [MatTableModule, MatSortModule],
  templateUrl: './grid.html',
  styleUrl: './grid.css',
})
export class Grid<T> {
@Input() data: T[] = [];

  @Input() columns: GridColumn<T>[] = [];


  @Output()
  cellClick = new EventEmitter<T>();


  dataSource = new MatTableDataSource<T>();

  displayedColumns: string[] = [];


  ngOnChanges() {

    this.dataSource.data = this.data;

    this.displayedColumns =
      this.columns.map(x => x.columnDef as string);

  }


  onClick(row:T){

    this.cellClick.emit(row);

  }
}
