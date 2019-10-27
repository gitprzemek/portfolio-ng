import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSkillsDialogComponent } from './about-skills-dialog.component';

describe('AboutSkillsDialogComponent', () => {
  let component: AboutSkillsDialogComponent;
  let fixture: ComponentFixture<AboutSkillsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSkillsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSkillsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
