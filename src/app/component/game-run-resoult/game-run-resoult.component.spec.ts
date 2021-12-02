import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRunResoultComponent } from './game-run-resoult.component';

describe('GameRunResoultComponent', () => {
  let component: GameRunResoultComponent;
  let fixture: ComponentFixture<GameRunResoultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameRunResoultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRunResoultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
