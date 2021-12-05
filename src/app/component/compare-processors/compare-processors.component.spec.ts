import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareProcessorsComponent } from './compare-processors.component';

describe('CompareProcessorsComponent', () => {
  let component: CompareProcessorsComponent;
  let fixture: ComponentFixture<CompareProcessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareProcessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareProcessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
