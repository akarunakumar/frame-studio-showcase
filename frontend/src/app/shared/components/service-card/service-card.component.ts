import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ServiceCardData {
  slug: string;
  title: string;
  shortDescription: string;
  image?: string;
}

@Component({
  selector: 'fsi-service-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a class="fsi-service-card" [routerLink]="['/services', service().slug]">
      <div class="fsi-service-card__media">
        @if (service().image) {
          <img [src]="service().image" [alt]="service().title" loading="lazy" />
        } @else {
          <div class="fsi-photo-placeholder">{{ service().title }}</div>
        }
      </div>
      <h3>{{ service().title }}</h3>
      <p>{{ service().shortDescription }}</p>
    </a>
  `,
  styleUrl: './service-card.component.scss',
})
export class ServiceCardComponent {
  readonly service = input.required<ServiceCardData>();
}
