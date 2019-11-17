import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MainServiceService} from '../../../shared/services/main-service.service';

@Component({
  selector: 'app-about-projects-dialog',
  templateUrl: './about-projects-dialog.component.html',
  styleUrls: ['./about-projects-dialog.component.scss']
})
export class AboutProjectsDialogComponent implements OnInit {
  @Output() closeDialog = new EventEmitter<boolean>();
  @Input() showContent: boolean;
  projects = [];
  currentSlide = 1;
  positionSlide = 0;
  constructor(private mainService: MainServiceService) { }

  ngOnInit() {
    this.projects = this.mainService.projectsObject;
    console.log(this.projects, this.mainService.projectsObject);
  }
  closeDialogFn(): void {
    this.closeDialog.emit(false);
  }
  goNext(): void {
    if (this.currentSlide === this.projects.length) {
      return;
    } else {
      this.currentSlide = this.currentSlide + 1;
      this.positionSlide = this.positionSlide + 100;
    }
    console.log(this.currentSlide, this.positionSlide, this.projects.length);
  }
  goPrev(): void {
    if (this.currentSlide === 1) {
      return;
    } else {
      this.currentSlide = this.currentSlide - 1;
      this.positionSlide = this.positionSlide - 100;
    }
  }

}
