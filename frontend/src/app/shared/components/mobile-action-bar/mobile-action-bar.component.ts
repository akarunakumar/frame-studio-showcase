import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'fsi-mobile-action-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mobile-action-bar.component.html',
  styleUrl: './mobile-action-bar.component.scss',
})
export class MobileActionBarComponent {
  // Phone/WhatsApp numbers come from content-service's website_settings
  // once Phase 3/4 wires it up. Blank until then — see spec section 68.
  protected readonly companyPhone = environment.companyPhone;
  protected readonly whatsappNumber = environment.whatsappNumber;

  protected get callLink(): string {
    return `tel:${this.companyPhone}`;
  }

  protected get whatsappLink(): string {
    const message = encodeURIComponent(
      'Hi, I am interested in interior design services from Frame Studio Interiors. I would like to discuss my project.'
    );
    return `https://wa.me/${this.whatsappNumber}?text=${message}`;
  }
}
