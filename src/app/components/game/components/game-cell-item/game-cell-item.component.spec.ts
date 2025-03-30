import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCellItemComponent } from './game-cell-item.component';

describe('GameCellItemComponent', () => {
  let component: GameCellItemComponent;
  let fixture: ComponentFixture<GameCellItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GameCellItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCellItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
