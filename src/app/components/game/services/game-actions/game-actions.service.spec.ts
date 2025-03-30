import { TestBed, inject } from '@angular/core/testing';
import { GameActionsService } from './game-actions.service';

describe('GameActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameActionsService],
    });
  });

  it('should ...', inject([GameActionsService], (service: GameActionsService) => {
    expect(service).toBeTruthy();
  }));
});
