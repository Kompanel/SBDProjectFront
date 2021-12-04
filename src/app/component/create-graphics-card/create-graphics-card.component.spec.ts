import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGraphicsCardComponent } from './create-graphics-card.component';

describe('CreateGraphicsCardComponent', () => {
  let component: CreateGraphicsCardComponent;
  let fixture: ComponentFixture<CreateGraphicsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGraphicsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGraphicsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
