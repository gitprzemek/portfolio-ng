import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProjectsDialogComponent } from './about-projects-dialog.component';

describe('AboutProjectsDialogComponent', () => {
  let component: AboutProjectsDialogComponent;
  let fixture: ComponentFixture<AboutProjectsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutProjectsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutProjectsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
