import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GameComponent } from './components';

@Component({
  selector: 'app-root',
  imports: [GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
