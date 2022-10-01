import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideSerComponent } from './inside-ser.component';

describe('InsideSerComponent', () => {
  let component: InsideSerComponent;
  let fixture: ComponentFixture<InsideSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideSerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsideSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
