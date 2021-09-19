import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Output() loadMoreClickHandler = new EventEmitter();

  constructor() {}

  loadMoreClicked() {
    this.loadMoreClickHandler.emit();
  }
}
