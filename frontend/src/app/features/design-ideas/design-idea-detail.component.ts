import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DEMO_PHOTOS } from '../../shared/data/demo-images';

/**
 * PHASE 2 — visual design pass. Image picked by matching keywords in
 * the slug against the same demo photo set used everywhere else
 * (see demo-images.ts) — real per-idea images come from
 * content-service in Phase 3.
 */
@Component({
  selector: 'fsi-design-idea-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './design-idea-detail.component.html',
  styleUrl: './design-idea-detail.component.scss',
})
export class DesignIdeaDetailComponent {
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
    if (slug.includes('kitchen') || slug.includes('bathroom')) {
      return DEMO_PHOTOS.kitchen(1600);
    }
    if (slug.includes('bedroom')) {
      return DEMO_PHOTOS.bedroom(1600);
    }
    if (slug.includes('office')) {
      return DEMO_PHOTOS.office(1600);
    }
    if (slug.includes('dining') || slug.includes('restaurant')) {
      return DEMO_PHOTOS.restaurant(1600);
    }
    return DEMO_PHOTOS.livingRoom(1600);
  }
}
