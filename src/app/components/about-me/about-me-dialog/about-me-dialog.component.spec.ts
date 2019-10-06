import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeDialogComponent } from './about-me-dialog.component';

describe('AboutMeDialogComponent', () => {
  let component: AboutMeDialogComponent;
  let fixture: ComponentFixture<AboutMeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
