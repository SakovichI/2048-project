import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GameCellItem } from '../../models';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-game-cell-item',
  imports: [NgStyle],
  templateUrl: './game-cell-item.component.html',
  styleUrl: './game-cell-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCellItemComponent {
  readonly $cellItem = input.required<GameCellItem>({ alias: 'cellItem' });
}
