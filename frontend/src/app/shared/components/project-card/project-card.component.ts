import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ProjectCardData {
  slug: string;
  name: string;
  location: string;
  projectType: string;
  designStyle: string;
  shortDescription: string;
  coverImage?: string;
}

@Component({
  selector: 'fsi-project-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a class="fsi-project-card" [routerLink]="['/projects', project().slug]">
      <div class="fsi-project-card__media">
        @if (project().coverImage) {
          <img [src]="project().coverImage" [alt]="project().name" loading="lazy" />
        } @else {
          <div class="fsi-photo-placeholder">{{ project().designStyle }}</div>
        }
        <span class="fsi-project-card__view">View Project</span>
      </div>

      <div class="fsi-project-card__body">
        <h3>{{ project().name }}</h3>
        <p class="fsi-project-card__meta">
          {{ project().location }}, {{ project().projectType }}
        </p>
        <p class="fsi-project-card__desc">{{ project().shortDescription }}</p>
      </div>
    </a>
  `,
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  readonly project = input.required<ProjectCardData>();
}
