import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSingleGraphicsCardComponent } from './edit-single-graphics-card.component';

describe('EditSingleGraphicsCardComponent', () => {
  let component: EditSingleGraphicsCardComponent;
  let fixture: ComponentFixture<EditSingleGraphicsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSingleGraphicsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSingleGraphicsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
