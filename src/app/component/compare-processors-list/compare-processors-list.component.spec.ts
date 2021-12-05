import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareProcessorsListComponent } from './compare-processors-list.component';

describe('CompareProcessorsListComponent', () => {
  let component: CompareProcessorsListComponent;
  let fixture: ComponentFixture<CompareProcessorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareProcessorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareProcessorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
