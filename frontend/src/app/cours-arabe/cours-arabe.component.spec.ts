import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursArabeComponent } from './cours-arabe.component';

describe('CoursArabeComponent', () => {
  let component: CoursArabeComponent;
  let fixture: ComponentFixture<CoursArabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursArabeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursArabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
