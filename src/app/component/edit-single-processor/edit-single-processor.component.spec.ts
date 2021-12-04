import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSingleProcessorComponent } from './edit-single-processor.component';

describe('EditSingleProcessorComponent', () => {
  let component: EditSingleProcessorComponent;
  let fixture: ComponentFixture<EditSingleProcessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSingleProcessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSingleProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
