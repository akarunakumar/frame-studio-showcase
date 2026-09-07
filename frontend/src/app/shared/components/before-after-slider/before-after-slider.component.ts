import { Component, input, signal } from '@angular/core';

export interface BeforeAfterEntry {
  title: string;
  description?: string;
  beforeImage?: string;
  afterImage?: string;
}

/**
 * Touch-friendly, keyboard-accessible before/after comparison slider.
 * Built on a native <input type="range"> for full accessibility (spec
 * section 51) — it drives a CSS clip-path so it also works with a
 * simple drag/tap on touch devices (spec section 50), with no custom
 * pointer-event handling required.
 */
@Component({
  selector: 'fsi-before-after-slider',
  standalone: true,
  template: `
    <figure class="fsi-ba-slider">
      <div class="fsi-ba-slider__frame" [style.--fsi-ba-position.%]="position()">
        <div class="fsi-ba-slider__pane fsi-ba-slider__pane--after">
          @if (entry().afterImage) {
            <img [src]="entry().afterImage" [alt]="entry().title + ' — after'" loading="lazy" />
          } @else {
            <div class="fsi-photo-placeholder">After</div>
          }
        </div>

        <div class="fsi-ba-slider__pane fsi-ba-slider__pane--before">
          @if (entry().beforeImage) {
            <img [src]="entry().beforeImage" [alt]="entry().title + ' — before'" loading="lazy" />
          } @else {
            <div class="fsi-photo-placeholder">Before</div>
          }
        </div>

        <div class="fsi-ba-slider__handle" aria-hidden="true"></div>

        <input
          class="fsi-ba-slider__range"
          type="range"
          min="0"
          max="100"
          [value]="position()"
          (input)="onSlide($event)"
          [attr.aria-label]="'Drag to compare before and after: ' + entry().title"
        />
      </div>

      <figcaption>
        <h3>{{ entry().title }}</h3>
        @if (entry().description) {
          <p>{{ entry().description }}</p>
        }
      </figcaption>
    </figure>
  `,
  styleUrl: './before-after-slider.component.scss',
})
export class BeforeAfterSliderComponent {
  readonly entry = input.required<BeforeAfterEntry>();
  protected readonly position = signal(50);

  protected onSlide(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.position.set(value);
  }
}
