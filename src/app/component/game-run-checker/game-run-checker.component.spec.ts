import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRunCheckerComponent } from './game-run-checker.component';

describe('GameRunCheckerComponent', () => {
  let component: GameRunCheckerComponent;
  let fixture: ComponentFixture<GameRunCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameRunCheckerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRunCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
