import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-about-skills-dialog',
  templateUrl: './about-skills-dialog.component.html',
  styleUrls: ['./about-skills-dialog.component.scss']
})
export class AboutSkillsDialogComponent implements OnInit {
  @Output() closeDialog = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  closeDialogFn(): void {
    this.closeDialog.emit(false);
  }

}
