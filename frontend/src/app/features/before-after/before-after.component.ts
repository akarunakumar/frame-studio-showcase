import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  BeforeAfterSliderComponent,
  BeforeAfterEntry,
} from '../../shared/components/before-after-slider/before-after-slider.component';
import { DEMO_PHOTOS } from '../../shared/data/demo-images';

/**
 * PHASE 2 — visual design pass. Entries below are SAMPLE DATA (spec
 * section 18's own examples); admin-managed before/after entries
 * from project-service replace them in Phase 3. The before/after
 * image pairs here are two DIFFERENT stock photos standing in for a
 * real transformation — they are not an actual before/after of the
 * same room, and will be replaced by real paired photos.
 */
@Component({
  selector: 'fsi-before-after',
  standalone: true,
  imports: [RouterLink, BeforeAfterSliderComponent],
  templateUrl: './before-after.component.html',
  styleUrl: './before-after.component.scss',
})
export class BeforeAfterComponent {
  protected readonly entries: BeforeAfterEntry[] = [
    {
      title: 'Old Kitchen to Modern Kitchen',
      description: 'A closed, dated kitchen opened up with a modular layout and better storage.',
      beforeImage: DEMO_PHOTOS.office(800),
      afterImage: DEMO_PHOTOS.kitchen(800),
    },
    {
      title: 'Empty Living Room to Finished Living Room',
      description: 'From bare shell to a finished, furnished living space.',
      beforeImage: DEMO_PHOTOS.office(800),
      afterImage: DEMO_PHOTOS.livingRoom(800),
    },
    {
      title: 'Old Bedroom to Redesigned Bedroom',
      description: 'Updated storage, lighting, and finishes throughout.',
      beforeImage: DEMO_PHOTOS.office(800),
      afterImage: DEMO_PHOTOS.bedroom(800),
    },
  ];
}
