import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent, ProjectCardData } from '../../shared/components/project-card/project-card.component';
import { DEMO_PHOTOS } from '../../shared/data/demo-images';

/**
 * PHASE 2 — visual design pass. Filtering here is client-side over
 * sample data (spec section 60) so the interaction can be previewed.
 * Server-side search/filter/pagination against project-service —
 * plus location and design-style filters — are added in Phase 3.
 * Images are demo stock photos (see demo-images.ts), not real projects.
 */
@Component({
  selector: 'fsi-projects-list',
  standalone: true,
  imports: [RouterLink, ProjectCardComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent {
  protected readonly filters = ['All', 'Residential', 'Commercial', 'Apartment', 'Villa', 'Office'];
  protected readonly activeFilter = signal('All');

  // SAMPLE DATA (spec section 60) — replaced by project-service in Phase 3.
  private readonly allProjects: (ProjectCardData & { filterTags: string[] })[] = [
    {
      slug: 'modern-3bhk-apartment',
      name: 'Modern 3BHK Apartment',
      location: 'Whitefield, Bengaluru',
      projectType: 'Apartment',
      designStyle: 'Modern',
      shortDescription: 'An open, light-filled layout for a family of four.',
      coverImage: DEMO_PHOTOS.livingRoom(800),
      filterTags: ['Residential', 'Apartment'],
    },
    {
      slug: 'luxury-villa',
      name: 'Luxury Villa',
      location: 'Sarjapur Road, Bengaluru',
      projectType: 'Villa',
      designStyle: 'Luxury',
      shortDescription: 'Layered materials and custom joinery throughout.',
      coverImage: DEMO_PHOTOS.bedroom(800),
      filterTags: ['Residential', 'Villa'],
    },
    {
      slug: 'contemporary-office',
      name: 'Contemporary Office',
      location: 'Indiranagar, Bengaluru',
      projectType: 'Office',
      designStyle: 'Contemporary',
      shortDescription: 'A workspace built around focus and collaboration.',
      coverImage: DEMO_PHOTOS.office(800),
      filterTags: ['Commercial', 'Office'],
    },
    {
      slug: 'minimalist-2bhk',
      name: 'Minimalist 2BHK',
      location: 'HSR Layout, Bengaluru',
      projectType: 'Apartment',
      designStyle: 'Minimalist',
      shortDescription: 'Restrained materials, maximum daily function.',
      coverImage: DEMO_PHOTOS.livingRoom(800),
      filterTags: ['Residential', 'Apartment'],
    },
    {
      slug: 'premium-modular-kitchen',
      name: 'Premium Modular Kitchen',
      location: 'Koramangala, Bengaluru',
      projectType: 'Apartment',
      designStyle: 'Contemporary',
      shortDescription: 'A working kitchen built for a family that cooks daily.',
      coverImage: DEMO_PHOTOS.kitchen(800),
      filterTags: ['Residential', 'Apartment'],
    },
    {
      slug: 'contemporary-restaurant',
      name: 'Contemporary Restaurant',
      location: 'Church Street, Bengaluru',
      projectType: 'Restaurant',
      designStyle: 'Contemporary',
      shortDescription: 'A dining room designed around flow at peak hours.',
      coverImage: DEMO_PHOTOS.restaurant(800),
      filterTags: ['Commercial'],
    },
  ];

  protected readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') {
      return this.allProjects;
    }
    return this.allProjects.filter((project) => project.filterTags.includes(filter));
  });

  protected setFilter(filter: string): void {
    this.activeFilter.set(filter);
  }
}
