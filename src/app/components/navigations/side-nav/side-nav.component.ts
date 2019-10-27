import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit,  OnChanges {
  @Output() elementToScroll = new EventEmitter<boolean>();
  @Input() elementSelected;
  selectedSection = 'aboutMe';
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    if ( this.elementSelected !== undefined) {
      console.log(this.elementSelected);
      this.selectedSection = this.elementSelected;
    }
  }
  scrollToElementFn(element) {
    this.elementToScroll.emit(element);
    this.selectedSection = element;
  }

}
