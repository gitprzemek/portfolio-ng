import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-about-me-dialog',
  templateUrl: './about-me-dialog.component.html',
  styleUrls: ['./about-me-dialog.component.scss']
})
export class AboutMeDialogComponent implements OnInit {
  @Output() closeDialog = new EventEmitter<boolean>();
  @Input() showContent: boolean;
  constructor() { }

  ngOnInit() {
  }
  closeDialogFn(): void {
    this.closeDialog.emit(false);
  }

}
