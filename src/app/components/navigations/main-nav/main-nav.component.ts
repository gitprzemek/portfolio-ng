import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @Output() elementToScroll = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  scrollToElementFn(element) {
    this.elementToScroll.emit(element);
  }

}
