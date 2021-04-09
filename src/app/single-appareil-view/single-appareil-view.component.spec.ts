import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAppareilViewComponent } from './single-appareil-view.component';

describe('SingleAppareilViewComponent', () => {
  let component: SingleAppareilViewComponent;
  let fixture: ComponentFixture<SingleAppareilViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAppareilViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAppareilViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
