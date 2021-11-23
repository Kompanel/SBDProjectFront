import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsCardDetailsComponent } from './graphics-card-details.component';

describe('GraphicsCardDetailsComponent', () => {
  let component: GraphicsCardDetailsComponent;
  let fixture: ComponentFixture<GraphicsCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicsCardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
