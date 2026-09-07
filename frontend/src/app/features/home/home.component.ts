import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ServiceCardComponent, ServiceCardData } from '../../shared/components/service-card/service-card.component';
import { ProjectCardComponent, ProjectCardData } from '../../shared/components/project-card/project-card.component';
import {
  TestimonialCardComponent,
  TestimonialCardData,
} from '../../shared/components/testimonial-card/testimonial-card.component';
import { DEMO_PHOTOS } from '../../shared/data/demo-images';

/**
 * PHASE 2 — visual design pass.
 *
 * The section content below (services, projects, testimonials, why-
 * choose-us copy) is SAMPLE/DEMO content only, drawn from the spec's
 * own suggested lists (sections 14, 24, 60), so the layout can be
 * previewed before real data exists. None of it is a factual claim
 * about the business (no invented stats, years of experience, or
 * project counts — spec section 68). It is replaced by live API data
 * from project-service / content-service in Phase 3/4.
 *
 * Images are real, freely-licensed stock photos (see demo-images.ts)
 * standing in for real project photography until it's available.
 */
@Component({
  selector: 'fsi-home',
  standalone: true,
  imports: [RouterLink, SectionHeadingComponent, ServiceCardComponent, ProjectCardComponent, TestimonialCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // --- SAMPLE DATA (spec section 60) — replaced by content-service in Phase 3 ---
  protected readonly sampleServices: ServiceCardData[] = [
    { slug: 'modular-kitchen', title: 'Modular Kitchen', shortDescription: 'Layouts built around how you actually cook.', image: DEMO_PHOTOS.kitchen(800) },
    { slug: 'living-room', title: 'Living Room', shortDescription: 'Spaces designed for how your family gathers.', image: DEMO_PHOTOS.livingRoom(800) },
    { slug: 'wardrobes', title: 'Wardrobes', shortDescription: 'Storage that disappears into the room.', image: DEMO_PHOTOS.bedroom(800) },
    { slug: 'false-ceiling', title: 'False Ceiling & Lighting', shortDescription: 'Light layered for mood, not just visibility.', image: DEMO_PHOTOS.livingRoom(800) },
  ];

  // --- SAMPLE DATA (spec section 60) — replaced by project-service in Phase 3 ---
  protected readonly sampleProjects: ProjectCardData[] = [
    {
      slug: 'modern-3bhk-apartment',
      name: 'Modern 3BHK Apartment',
      location: 'Whitefield, Bengaluru',
      projectType: 'Apartment',
      designStyle: 'Modern',
      shortDescription: 'An open, light-filled layout for a family of four.',
      coverImage: DEMO_PHOTOS.livingRoom(800),
    },
    {
      slug: 'luxury-villa',
      name: 'Luxury Villa',
      location: 'Sarjapur Road, Bengaluru',
      projectType: 'Villa',
      designStyle: 'Luxury',
      shortDescription: 'Layered materials and custom joinery throughout.',
      coverImage: DEMO_PHOTOS.bedroom(800),
    },
    {
      slug: 'contemporary-office',
      name: 'Contemporary Office',
      location: 'Indiranagar, Bengaluru',
      projectType: 'Office',
      designStyle: 'Contemporary',
      shortDescription: 'A workspace built around focus and collaboration.',
      coverImage: DEMO_PHOTOS.office(800),
    },
  ];

  // --- SAMPLE DATA (spec section 60) — replaced by content-service in Phase 3 ---
  protected readonly sampleTestimonials: TestimonialCardData[] = [
    {
      clientName: 'Sample Testimonial',
      project: 'Modern 3BHK Apartment',
      location: 'Bengaluru',
      testimonial:
        'Real client testimonials will appear here once published from Admin — this is placeholder demo copy, not an actual review.',
    },
  ];

  // --- REAL DATA — provided by the business owner (marketing banner, Sep 2026) ---
  protected readonly pricingTiers = [
    { label: '2 BHK', startingPrice: '₹5 Lakhs*' },
    { label: '3 BHK', startingPrice: '₹6 Lakhs*' },
  ];

  protected readonly whyChooseUs = [
    { title: 'Factory Finish', description: 'Flawless finishing, built to perfection.' },
    { title: 'Premium Materials', description: 'Carefully selected. Built to last.' },
    { title: '10 Year Warranty', description: 'Long-term peace of mind on every project.' },
    { title: '45 Days Execution', description: 'On time, every time.' },
    { title: 'Transparent Pricing', description: 'What we say is what you pay — no hidden charges.' },
    { title: 'Expert Team & Supervision', description: 'Skilled, experienced, and reliable at every stage.' },
  ];

  protected readonly processPreview = [
    { step: 1, title: 'Consultation', description: 'We start by understanding how you use your space.' },
    { step: 2, title: 'Concept Design', description: 'A layout and material direction take shape.' },
    { step: 3, title: '3D Visualization', description: 'See the design before a single wall changes.' },
    { step: 4, title: 'Execution', description: 'Skilled trades bring the approved design to life.' },
  ];
}
