import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() myTabEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  showTab(showTab: string) {
    this.myTabEventEmitter.emit(showTab);
  }
}
