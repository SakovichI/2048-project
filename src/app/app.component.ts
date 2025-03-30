import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { GAME_CELL_COLOR_MAP, GAME_CELL_MAX_VALUE } from './constants';
import { GameCellItem, GameCellItemStyle } from './models';
import { GameService, GameCellItemsService, GameActionsService, GameMovesService, GameScoreService, GameEndService } from './services';
import {
  SectionContentComponent,
  SectionHeaderComponent,
  GameScoreComponent,
  ButtonComponent,
  OverlayComponent,
  GameCellItemComponent,
} from './ui';

@Component({
  selector: 'app-root',
  imports: [
    SectionContentComponent,
    SectionHeaderComponent,
    GameCellItemComponent,
    GameScoreComponent,
    ButtonComponent,
    OverlayComponent,
    NgStyle,
  ],
  providers: [GameService, GameCellItemsService, GameActionsService, GameMovesService, GameScoreService, GameEndService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly #gameService = inject(GameService);

  readonly $tableSize = this.#gameService.$tableSize;
  readonly $cellItems = this.#gameService.$cellItems;
  readonly $score = this.#gameService.$score;
  readonly $isGameEnd = this.#gameService.$isGameEnd;

  readonly gameCellMaxValue = GAME_CELL_MAX_VALUE;

  @HostListener('window:keyup', ['$event'])
  onTriggerActions(event: KeyboardEvent): void {
    this.#gameService.moveAction(event);
  }

  onRestartGame(): void {
    this.#gameService.resetGame();
  }

  getStyles(item: GameCellItem): GameCellItemStyle {
    const top = item.row * 110 - 100 + 'px';
    const left = item.col * 110 - 100 + 'px';

    return {
      top: top,
      left: left,
      'background-color': GAME_CELL_COLOR_MAP[item.value] || 'black',
    };
  }
}
