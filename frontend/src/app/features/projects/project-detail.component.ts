import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DEMO_PHOTOS } from '../../shared/data/demo-images';

interface ProjectDetailSample {
  location: string;
  projectType: string;
  area: string;
  designStyle: string;
  coverImage: string;
}

/**
 * PHASE 2 — visual design pass. Shows one sample project by slug,
 * looked up from a small local map so each project shows its own
 * overview + photo (matching the cards on /projects) rather than
 * always the same generic placeholder. Real overview/story/gallery
 * data from project-service replaces this lookup in Phase 3 (spec
 * section 17). Images are demo stock photos (see demo-images.ts).
 */
@Component({
  selector: 'fsi-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly slug = this.route.snapshot.paramMap.get('slug') ?? '';

  // SAMPLE DATA — replaced by a project-service lookup by slug in Phase 3.
  private readonly samplesBySlug: Record<string, ProjectDetailSample> = {
    'modern-3bhk-apartment': {
      location: 'Whitefield, Bengaluru',
      projectType: 'Apartment',
      area: '1,650 sq ft',
      designStyle: 'Modern',
      coverImage: DEMO_PHOTOS.livingRoom(1600),
    },
    'luxury-villa': {
      location: 'Sarjapur Road, Bengaluru',
      projectType: 'Villa',
      area: '3,200 sq ft',
      designStyle: 'Luxury',
      coverImage: DEMO_PHOTOS.bedroom(1600),
    },
    'contemporary-office': {
      location: 'Indiranagar, Bengaluru',
      projectType: 'Office',
      area: '2,000 sq ft',
      designStyle: 'Contemporary',
      coverImage: DEMO_PHOTOS.office(1600),
    },
    'minimalist-2bhk': {
      location: 'HSR Layout, Bengaluru',
      projectType: 'Apartment',
      area: '1,100 sq ft',
      designStyle: 'Minimalist',
      coverImage: DEMO_PHOTOS.livingRoom(1600),
    },
    'premium-modular-kitchen': {
      location: 'Koramangala, Bengaluru',
      projectType: 'Apartment',
      area: '180 sq ft (kitchen)',
      designStyle: 'Contemporary',
      coverImage: DEMO_PHOTOS.kitchen(1600),
    },
    'contemporary-restaurant': {
      location: 'Church Street, Bengaluru',
      projectType: 'Restaurant',
      area: '2,400 sq ft',
      designStyle: 'Contemporary',
      coverImage: DEMO_PHOTOS.restaurant(1600),
    },
  };

  private readonly fallback: ProjectDetailSample = {
    location: 'Bengaluru',
    projectType: 'Residential',
    area: '—',
    designStyle: 'Modern',
    coverImage: DEMO_PHOTOS.livingRoom(1600),
  };

  private get sample(): ProjectDetailSample {
    return this.samplesBySlug[this.slug] ?? this.fallback;
  }

  protected get displayName(): string {
    return this.slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  protected get coverImage(): string {
    return this.sample.coverImage;
  }

  protected get overview() {
    const s = this.sample;
    return [
      { label: 'Location', value: s.location },
      { label: 'Project type', value: s.projectType },
      { label: 'Area', value: s.area },
      { label: 'Design style', value: s.designStyle },
    ];
  }

  protected readonly story = [
    {
      title: 'Client requirement',
      text: 'A young family needed more storage and better light without losing the sense of space in a compact layout.',
    },
    {
      title: 'Design concept',
      text: 'An open-plan living and dining area, with storage built into the walls rather than added as furniture.',
    },
    {
      title: 'Final result',
      text: 'A layout that feels larger than its footprint, with every surface earning its place.',
    },
  ];

  // Gallery reuses the same demo photo set to represent each stage —
  // these are NOT real before/during/after photos of this project.
  protected get galleryStages() {
    return [
      { label: 'Before', image: DEMO_PHOTOS.office(800) },
      { label: 'During', image: DEMO_PHOTOS.office(800) },
      { label: '3D Design', image: this.sample.coverImage },
      { label: 'After', image: this.sample.coverImage },
    ];
  }
}
