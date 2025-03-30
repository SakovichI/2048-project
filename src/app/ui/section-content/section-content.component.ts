import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrl: './section-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionContentComponent {
  readonly $tableSize = input.required<number>({ alias: 'tableSize' });
  readonly $rows = computed(() => Array.from({ length: this.$tableSize() }, (_, i) => i));
}
