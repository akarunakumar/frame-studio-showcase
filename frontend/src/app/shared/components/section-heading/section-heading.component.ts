import { Component, input } from '@angular/core';

@Component({
  selector: 'fsi-section-heading',
  standalone: true,
  template: `
    <div class="fsi-section-heading">
      @if (eyebrow()) {
        <span class="fsi-eyebrow">{{ eyebrow() }}</span>
      }
      <h2>{{ title() }}</h2>
      @if (subtitle()) {
        <p>{{ subtitle() }}</p>
      }
    </div>
  `,
  styleUrl: './section-heading.component.scss',
})
export class SectionHeadingComponent {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
}
