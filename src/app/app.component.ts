import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  element: any;
  title = 'portfolio-ng';
  animating = false;

  scrollToElement($element): void {
    this.element = $element;
    const element = document.getElementById($element);
    element.scrollIntoView({behavior: 'smooth'});
  }
  wheelScrollEvent($event) {
    $event.preventDefault();
    if (this.animating ){
      return false;
    }
    this.animating = true;
    const viewH = window.innerHeight;
    const windowOffset = window.pageYOffset;
    const scrollByPxDown = windowOffset + viewH;
    const scrollByPxUp = windowOffset - viewH;
    if ($event.deltaY > 0) {
      window.scrollTo({top: scrollByPxDown, behavior: 'smooth'});
      setTimeout(() => { this.animating = false; }, 800);
      if (windowOffset === 0) {
        this.element = 'aboutProjects';
      } else if (windowOffset >= viewH && (windowOffset < (viewH * 2))) {
        this.element = 'aboutSkills';
      }
    } else {
      window.scrollTo({top:  scrollByPxUp, behavior: 'smooth'});
      setTimeout(() => { this.animating = false; }, 800);
      if (windowOffset >= viewH && (windowOffset < (viewH * 2))) {
        this.element = 'aboutMe';
      } else if (windowOffset >= (viewH * 2)) {
        this.element = 'aboutProjects';
      }
    }
  }
  scrollMouseEvent() {
    const rect = this.element.getBoundingClientRect();
    console.log(rect);
    if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      console.log('JEST');
    } else {
      console.log('NIE JEST');
    }
  }
}
