import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-projects',
  templateUrl: './about-projects.component.html',
  styleUrls: ['./about-projects.component.scss']
})
export class AboutProjectsComponent implements OnInit {
  showMeDialog = false;
  showContent = false;
  constructor() { }

  ngOnInit() {
  }
  showAboutMeDialog(): void {
    this.showMeDialog = !this.showMeDialog;
    setTimeout(() => {
      this.showContent = this.showMeDialog;
    }, 300);
  }
  closeDialogWindow($event): void {
    this.showMeDialog = $event;
  }

}
