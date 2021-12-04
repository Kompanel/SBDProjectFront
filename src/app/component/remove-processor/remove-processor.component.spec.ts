import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProcessorComponent } from './remove-processor.component';

describe('RemoveProcessorComponent', () => {
  let component: RemoveProcessorComponent;
  let fixture: ComponentFixture<RemoveProcessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveProcessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
