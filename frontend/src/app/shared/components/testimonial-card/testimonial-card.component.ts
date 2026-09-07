import { Component, input } from '@angular/core';

export interface TestimonialCardData {
  clientName: string;
  location?: string;
  project?: string;
  rating?: number;
  testimonial: string;
}

@Component({
  selector: 'fsi-testimonial-card',
  standalone: true,
  template: `
    <blockquote class="fsi-testimonial-card">
      <p class="fsi-testimonial-card__quote">&ldquo;{{ testimonial().testimonial }}&rdquo;</p>
      <footer>
        <span class="fsi-testimonial-card__name">{{ testimonial().clientName }}</span>
        @if (testimonial().location || testimonial().project) {
          <span class="fsi-testimonial-card__meta">
            {{ testimonial().project }}{{ testimonial().project && testimonial().location ? ', ' : '' }}{{ testimonial().location }}
          </span>
        }
      </footer>
    </blockquote>
  `,
  styleUrl: './testimonial-card.component.scss',
})
export class TestimonialCardComponent {
  readonly testimonial = input.required<TestimonialCardData>();
}
