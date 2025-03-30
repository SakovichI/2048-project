import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GameCellItem } from '../../models';

@Component({
  selector: 'app-game-cell-item',
  templateUrl: './game-cell-item.component.html',
  styleUrl: './game-cell-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCellItemComponent {
  readonly $cellItem = input.required<GameCellItem>({ alias: 'cellItem' });
}
