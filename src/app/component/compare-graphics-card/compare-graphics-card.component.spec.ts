import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareGraphicsCardComponent } from './compare-graphics-card.component';

describe('CompareGraphicsCardComponent', () => {
  let component: CompareGraphicsCardComponent;
  let fixture: ComponentFixture<CompareGraphicsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareGraphicsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareGraphicsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
