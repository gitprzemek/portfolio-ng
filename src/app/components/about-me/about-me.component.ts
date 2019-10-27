import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
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
