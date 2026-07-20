
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { GridColumn } from '../../../../model/ui/table-data';
@Component({
  selector: 'app-grid',
  imports: [MatTableModule, MatSortModule],
  templateUrl: './grid.html',
  styleUrl: './grid.css',
})
export class Grid<T> {
@Input() data: T[] = [];
  @Input() columns: GridColumn<T>[] = [];
  @Output() cellClick = new EventEmitter<T>();

  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<T>();
  displayedColumns: string[] = [];

  ngOnChanges() {
    this.dataSource.data = this.data;
    this.displayedColumns = this.columns.map(x => x.columnDef as string);

    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onClick(row: T) {
    this.cellClick.emit(row);
  }
}
