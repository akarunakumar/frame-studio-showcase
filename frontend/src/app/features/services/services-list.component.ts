import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ServiceCardComponent, ServiceCardData } from '../../shared/components/service-card/service-card.component';
import { DEMO_PHOTOS } from '../../shared/data/demo-images';

/**
 * PHASE 2 — visual design pass. Category groupings and service names
 * below are drawn directly from spec section 14 (the client's own
 * service list) — replaced by live content-service data in Phase 3.
 * Images are demo stock photos (see demo-images.ts), not real work.
 */
@Component({
  selector: 'fsi-services-list',
  standalone: true,
  imports: [RouterLink, SectionHeadingComponent, ServiceCardComponent],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.scss',
})
export class ServicesListComponent {
  protected readonly categories: { name: string; services: ServiceCardData[] }[] = [
    {
      name: 'Residential Interiors',
      services: [
        { slug: 'apartment-interiors', title: 'Apartment Interiors', shortDescription: 'Complete interior design for apartment homes.', image: DEMO_PHOTOS.livingRoom(800) },
        { slug: 'villa-interiors', title: 'Villa Interiors', shortDescription: 'End-to-end design and execution for villas.', image: DEMO_PHOTOS.bedroom(800) },
        { slug: 'living-room', title: 'Living Room', shortDescription: 'Layouts built around how your family gathers.', image: DEMO_PHOTOS.livingRoom(800) },
        { slug: 'bedroom', title: 'Bedroom', shortDescription: 'Calm, functional spaces built for rest.', image: DEMO_PHOTOS.bedroom(800) },
        { slug: 'modular-kitchen', title: 'Kitchen', shortDescription: 'Layouts planned around how you actually cook.', image: DEMO_PHOTOS.kitchen(800) },
        { slug: 'bathroom', title: 'Bathroom', shortDescription: 'Fixtures and finishes chosen to last.', image: DEMO_PHOTOS.kitchen(800) },
      ],
    },
    {
      name: 'Commercial Interiors',
      services: [
        { slug: 'office-interiors', title: 'Office Interiors', shortDescription: 'Workspaces designed for focus and collaboration.', image: DEMO_PHOTOS.office(800) },
        { slug: 'retail-interiors', title: 'Retail Interiors', shortDescription: 'Store layouts that guide how customers move.', image: DEMO_PHOTOS.restaurant(800) },
        { slug: 'restaurant-interiors', title: 'Restaurant Interiors', shortDescription: 'Dining spaces built around flow and mood.', image: DEMO_PHOTOS.restaurant(800) },
        { slug: 'showroom-interiors', title: 'Showroom Interiors', shortDescription: 'Display-first layouts for showcasing products.', image: DEMO_PHOTOS.office(800) },
      ],
    },
    {
      name: 'Specialized Services',
      services: [
        { slug: 'wardrobes', title: 'Wardrobes', shortDescription: 'Storage that disappears into the room.', image: DEMO_PHOTOS.bedroom(800) },
        { slug: 'false-ceiling', title: 'False Ceiling', shortDescription: 'Ceiling design that shapes light and scale.', image: DEMO_PHOTOS.livingRoom(800) },
        { slug: 'lighting-design', title: 'Lighting Design', shortDescription: 'Light layered for mood, not just visibility.', image: DEMO_PHOTOS.livingRoom(800) },
        { slug: 'custom-furniture', title: 'Custom Furniture', shortDescription: 'Pieces built to fit a space exactly.', image: DEMO_PHOTOS.bedroom(800) },
        { slug: 'flooring', title: 'Flooring', shortDescription: 'Materials chosen for wear as much as looks.', image: DEMO_PHOTOS.livingRoom(800) },
        { slug: 'wall-design', title: 'Wall Design', shortDescription: 'Texture, panelling, and finish as a feature.', image: DEMO_PHOTOS.kitchen(800) },
      ],
    },
  ];
}
