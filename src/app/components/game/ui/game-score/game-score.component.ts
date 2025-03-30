import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrl: './game-score.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameScoreComponent {
  readonly $score = input(0, { alias: 'score' });
}
