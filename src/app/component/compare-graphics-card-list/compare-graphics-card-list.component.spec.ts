import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareGraphicsCardListComponent } from './compare-graphics-card-list.component';

describe('CompareGraphicsCardListComponent', () => {
  let component: CompareGraphicsCardListComponent;
  let fixture: ComponentFixture<CompareGraphicsCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareGraphicsCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareGraphicsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
