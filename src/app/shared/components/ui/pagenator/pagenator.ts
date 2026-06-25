import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagenator',
  imports: [MatPaginator],
  templateUrl: './pagenator.html',
  styleUrl: './pagenator.css',
})
export class Pagenator {

  @Input() length: number = 0;
  @Input() pageSize: number = 10;
  @Input() pageSizeOptions: number[] = [10, 20, 30, 40, 50];

  @Output() pageChanged = new EventEmitter<PageEvent>();

  onPageChange(event: PageEvent) {
    this.pageChanged.emit(event);
  }
}
