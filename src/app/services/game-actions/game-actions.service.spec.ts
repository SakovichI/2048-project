import { TestBed } from '@angular/core/testing';
import { GameActionsService } from './game-actions.service';

describe('GameActionsService', () => {
  let service: GameActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameActionsService],
    });

    service = TestBed.inject(GameActionsService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
