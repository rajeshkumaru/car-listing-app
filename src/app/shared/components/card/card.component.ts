import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardData!: any;
  @Output() handleNavigation = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  clickActionButton(id: string) {
    this.handleNavigation.emit(id);
  }
}
