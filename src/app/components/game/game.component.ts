import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { ButtonComponent, SectionContentComponent, SectionHeaderComponent } from './ui';
import { GameCellItemComponent } from './components/game-cell-item';
import { GameActionsService, GameCellItemsService, GameMovesService, GameScoreService, GameService } from './services';
import { GameCellItem } from './models';
import { GAME_CELL_COLOR_MAP } from './constants';
import { GameScoreComponent } from './ui/game-score';

@Component({
  selector: 'app-game',
  imports: [SectionContentComponent, SectionHeaderComponent, GameCellItemComponent, GameScoreComponent, ButtonComponent],
  providers: [GameService, GameCellItemsService, GameActionsService, GameMovesService, GameScoreService],
  templateUrl: './game.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {
  readonly #gameService = inject(GameService);

  readonly $cellItems = this.#gameService.$cellItems;
  readonly $score = this.#gameService.$score;

  @HostListener('window:keyup', ['$event'])
  onTriggerActions(event: KeyboardEvent): void {
    this.#gameService.moveAction(event);
  }

  onRestartGame(): void {
    this.#gameService.resetGame();
  }

  getStyles(item: GameCellItem): { [key: string]: string } {
    const top = item.row * 110 - 100 + 'px';
    const left = item.col * 110 - 100 + 'px';

    return {
      position: 'absolute',
      width: '100px',
      height: '100px',
      top: top,
      left: left,
      'background-color': GAME_CELL_COLOR_MAP[item.value] || 'black',
    };
  }
}
