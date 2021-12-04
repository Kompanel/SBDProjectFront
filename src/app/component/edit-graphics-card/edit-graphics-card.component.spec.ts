import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGraphicsCardComponent } from './edit-graphics-card.component';

describe('EditGraphicsCardComponent', () => {
  let component: EditGraphicsCardComponent;
  let fixture: ComponentFixture<EditGraphicsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGraphicsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGraphicsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
