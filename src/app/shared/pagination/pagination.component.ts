import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() paginationItems:number = 4;
  @Input() currentPage:number = 0;
  @Output() paginationEvent = new EventEmitter<number>();

  constructor() { }

  onPagination( pageNumber: number ) {
    this.paginationEvent.emit( pageNumber );
  }

}
