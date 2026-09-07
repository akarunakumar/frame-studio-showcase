import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * PHASE 2 — visual design pass.
 * Copy here describes the studio's approach in general terms only
 * (design philosophy, process) — no specific factual claims (years
 * of experience, project counts, awards) are made, per spec section
 * 68. Replace with the owner's real company story when provided.
 */
@Component({
  selector: 'fsi-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  protected readonly pillars = [
    {
      title: 'Design approach',
      description:
        'Every project starts with how a space is actually used — light, movement, storage, and the small daily habits that a good layout should absorb without friction.',
    },
    {
      title: 'Execution approach',
      description:
        'One team carries a project from concept drawings through final handover, so decisions made early are the same ones followed on site.',
    },
    {
      title: 'Quality commitment',
      description:
        'Materials and finishes are chosen for how they age, not just how they photograph on day one.',
    },
    {
      title: 'Customer experience',
      description:
        'Clear timelines, visible costs, and a single point of contact throughout — so there are no surprises along the way.',
    },
  ];
}
