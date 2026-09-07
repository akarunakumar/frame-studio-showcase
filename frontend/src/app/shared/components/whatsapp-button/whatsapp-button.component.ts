import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'fsi-whatsapp-button',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (whatsappNumber) {
      <a
        class="fsi-whatsapp-fab"
        [href]="whatsappLink"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        WhatsApp Us
      </a>
    } @else {
      <a class="fsi-whatsapp-fab" routerLink="/contact" aria-label="Contact us">
        Get in Touch
      </a>
    }
  `,
  styleUrl: './whatsapp-button.component.scss',
})
export class WhatsappButtonComponent {
  protected readonly whatsappNumber = environment.whatsappNumber;

  protected get whatsappLink(): string {
    const message = encodeURIComponent(
      'Hi, I am interested in interior design services from Frame Studio Interiors. I would like to discuss my project.'
    );
    return `https://wa.me/${this.whatsappNumber}?text=${message}`;
  }
}
