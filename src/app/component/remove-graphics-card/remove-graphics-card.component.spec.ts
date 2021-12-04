import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveGraphicsCardComponent } from './remove-graphics-card.component';

describe('RemoveGraphicsCardComponent', () => {
  let component: RemoveGraphicsCardComponent;
  let fixture: ComponentFixture<RemoveGraphicsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveGraphicsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveGraphicsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
