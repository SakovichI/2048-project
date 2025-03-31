import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';
import { GameActionsService } from '../game-actions';
import { GameActionsServiceMock } from '../../mocks';

describe('GameService', () => {
  let service: GameService;
  let gameActionsService: GameActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService, { provide: GameActionsService, useClass: GameActionsServiceMock }],
    });

    service = TestBed.inject(GameService);
    gameActionsService = TestBed.inject(GameActionsService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('resetGame', () => {
    it('should call');
  });
});
