import { TestBed, inject } from '@angular/core/testing';
import { GameEndService } from './game-end.service';

describe('GameEndService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameEndService],
    });
  });

  it('should ...', inject([GameEndService], (service: GameEndService) => {
    expect(service).toBeTruthy();
  }));
});
