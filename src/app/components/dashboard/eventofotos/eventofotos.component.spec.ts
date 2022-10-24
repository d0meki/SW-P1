import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventofotosComponent } from './eventofotos.component';

describe('EventofotosComponent', () => {
  let component: EventofotosComponent;
  let fixture: ComponentFixture<EventofotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventofotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventofotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
