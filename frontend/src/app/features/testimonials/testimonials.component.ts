import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  TestimonialCardComponent,
  TestimonialCardData,
} from '../../shared/components/testimonial-card/testimonial-card.component';

/**
 * PHASE 2 — visual design pass. The single entry below is placeholder
 * copy explicitly labeled as such (spec section 68 — never fabricate
 * real client testimonials). Real, published testimonials from
 * content-service replace it in Phase 3.
 */
@Component({
  selector: 'fsi-testimonials',
  standalone: true,
  imports: [RouterLink, TestimonialCardComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  protected readonly testimonials: TestimonialCardData[] = [
    {
      clientName: 'Sample Testimonial',
      testimonial:
        'This is placeholder demo copy, not an actual review. Real, published client testimonials will appear here once added from Admin.',
    },
  ];
}
