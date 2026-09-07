import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DEMO_PHOTOS } from '../../shared/data/demo-images';

interface DesignIdeaCard {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

/**
 * PHASE 2 — visual design pass. Categories match spec section 21
 * exactly; entries are SAMPLE DATA replaced by content-service in
 * Phase 3. Images are demo stock photos (see demo-images.ts).
 */
@Component({
  selector: 'fsi-design-ideas-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './design-ideas-list.component.html',
  styleUrl: './design-ideas-list.component.scss',
})
export class DesignIdeasListComponent {
  protected readonly categories = [
    'All',
    'Modern',
    'Luxury',
    'Minimalist',
    'Contemporary',
    'Scandinavian',
    'Traditional',
    'Industrial',
    'Indian Modern',
  ];
  protected readonly activeCategory = signal('All');

  private readonly ideas: DesignIdeaCard[] = [
    { slug: 'luxury-living-room', title: 'Luxury Living Room', category: 'Luxury', description: 'Layered textures and warm metals.', image: DEMO_PHOTOS.livingRoom(800) },
    { slug: 'minimalist-bedroom', title: 'Minimalist Bedroom', category: 'Minimalist', description: 'Restrained palette, maximum calm.', image: DEMO_PHOTOS.bedroom(800) },
    { slug: 'scandinavian-kitchen', title: 'Scandinavian Kitchen', category: 'Scandinavian', description: 'Light wood and quiet functionality.', image: DEMO_PHOTOS.kitchen(800) },
    { slug: 'industrial-home-office', title: 'Industrial Home Office', category: 'Industrial', description: 'Exposed materials, focused lighting.', image: DEMO_PHOTOS.office(800) },
    { slug: 'indian-modern-dining', title: 'Indian Modern Dining', category: 'Indian Modern', description: 'Traditional motifs, contemporary lines.', image: DEMO_PHOTOS.restaurant(800) },
    { slug: 'contemporary-bathroom', title: 'Contemporary Bathroom', category: 'Contemporary', description: 'Clean lines, considered lighting.', image: DEMO_PHOTOS.kitchen(800) },
  ];

  protected readonly filteredIdeas = computed(() => {
    const category = this.activeCategory();
    if (category === 'All') {
      return this.ideas;
    }
    return this.ideas.filter((idea) => idea.category === category);
  });

  protected setCategory(category: string): void {
    this.activeCategory.set(category);
  }
}
