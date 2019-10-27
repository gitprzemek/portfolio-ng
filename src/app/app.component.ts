import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  element: any;
  title = 'portfolio-ng';

  scrollToElement($element): void {
    console.log($element);
    this.element = $element;
    const element = document.getElementById($element);
    element.scrollIntoView({behavior: 'smooth'});
    console.log(this.element, element.offsetTop, window.pageYOffset);
  }
  wheelScrollEvent($event) {
    $event.preventDefault();
    console.log($event);
    const viewH = window.innerHeight;
    const windowOffset = window.pageYOffset;
    const scrollByPxDown = windowOffset + viewH;
    const scrollByPxUp = windowOffset - viewH;
    console.log(viewH, windowOffset);
    console.log('scrollByPxUp', scrollByPxUp);
    console.log('scrollByPxDown', scrollByPxDown);
    console.log(document.documentElement.scrollHeight);
    if ($event.deltaY > 0) {
      window.scrollTo({top: scrollByPxDown, behavior: 'smooth'});
      console.log('DOWN');
    } else {
      window.scrollTo({top:  scrollByPxUp, behavior: 'smooth'});
      console.log('UP');
    }
    console.log('windowOffset', windowOffset);
    if (windowOffset === 0) {
      this.element = 'aboutMe';
    } else if (windowOffset >= viewH && (windowOffset < (viewH * 2))) {
      this.element = 'aboutProjects';
    } else if (windowOffset >= (viewH * 2)) {
      console.log('aboutSkills');
      this.element = 'aboutSkills';
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
