import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-about-projects-dialog',
  templateUrl: './about-projects-dialog.component.html',
  styleUrls: ['./about-projects-dialog.component.scss']
})
export class AboutProjectsDialogComponent implements OnInit {
  @Output() closeDialog = new EventEmitter<boolean>();
  @Input() showContent: boolean;
  constructor() { }

  ngOnInit() {
  }
  closeDialogFn(): void {
    this.closeDialog.emit(false);
  }

}
