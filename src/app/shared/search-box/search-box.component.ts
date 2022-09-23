import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @Output() submitEvent = new EventEmitter<string>();

  public term: string = '';

  constructor() { }

  searchEvent() {
    this.submitEvent.emit( this.term );
  }

}
