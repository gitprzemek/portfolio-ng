import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrls: ['./about-skills.component.scss']
})
export class AboutSkillsComponent implements OnInit {
  showMeDialog = false;
  constructor() { }

  ngOnInit() {
  }
  showAboutMeDialog(): void {
    this.showMeDialog = !this.showMeDialog;
  }
  closeDialogWindow($event): void {
    this.showMeDialog = $event;
  }
}
