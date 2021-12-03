import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSingleGameComponent } from './edit-single-game.component';

describe('EditSingleGameComponent', () => {
  let component: EditSingleGameComponent;
  let fixture: ComponentFixture<EditSingleGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSingleGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSingleGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
