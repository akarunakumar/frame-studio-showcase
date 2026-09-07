import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DEMO_PHOTOS } from '../../shared/data/demo-images';

/**
 * PHASE 2 — visual design pass. Renders one sample service by slug
 * so the detail layout can be previewed; content-service wiring
 * (real title/description/benefits/FAQs per slug) lands in Phase 3.
 * The image is picked by matching keywords in the slug against the
 * same demo photo set used everywhere else (see demo-images.ts).
 */
@Component({
  selector: 'fsi-service-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss',
})
export class ServiceDetailComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly slug = this.route.snapshot.paramMap.get('slug') ?? '';

  protected get displayTitle(): string {
    return this.slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  protected get coverImage(): string {
    const slug = this.slug;
    if (slug.includes('kitchen') || slug.includes('bathroom') || slug.includes('flooring') || slug.includes('wall')) {
      return DEMO_PHOTOS.kitchen(1600);
    }
    if (slug.includes('bedroom') || slug.includes('wardrobe') || slug.includes('furniture')) {
      return DEMO_PHOTOS.bedroom(1600);
    }
    if (slug.includes('office') || slug.includes('showroom')) {
      return DEMO_PHOTOS.office(1600);
    }
    if (slug.includes('restaurant') || slug.includes('retail')) {
      return DEMO_PHOTOS.restaurant(1600);
    }
    return DEMO_PHOTOS.livingRoom(1600);
  }

  // SAMPLE DATA — replaced by a content-service lookup by slug in Phase 3.
  protected readonly benefits = [
    'Designed around how you actually cook and store',
    'Durable, easy-to-clean surfaces and hardware',
    'Lighting planned for both prep and everyday use',
  ];

  protected readonly faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Timelines depend on scope — we confirm a schedule with you before work begins.',
    },
    {
      question: 'Can I see a 3D design before execution starts?',
      answer: 'Yes — every project is visualized in 3D and approved before any work begins on site.',
    },
  ];
}
