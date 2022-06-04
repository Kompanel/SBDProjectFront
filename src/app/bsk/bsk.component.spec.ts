import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BskComponent } from './bsk.component';

describe('BskComponent', () => {
  let component: BskComponent;
  let fixture: ComponentFixture<BskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
