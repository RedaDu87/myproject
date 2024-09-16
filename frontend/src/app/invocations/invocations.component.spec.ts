import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvocationsComponent } from './invocations.component';

describe('InvocationsComponent', () => {
  let component: InvocationsComponent;
  let fixture: ComponentFixture<InvocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
