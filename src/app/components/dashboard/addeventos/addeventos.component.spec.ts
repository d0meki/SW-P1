import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeventosComponent } from './addeventos.component';

describe('AddeventosComponent', () => {
  let component: AddeventosComponent;
  let fixture: ComponentFixture<AddeventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddeventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
