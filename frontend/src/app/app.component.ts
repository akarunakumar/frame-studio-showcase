import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { WhatsappButtonComponent } from './shared/components/whatsapp-button/whatsapp-button.component';
import { MobileActionBarComponent } from './shared/components/mobile-action-bar/mobile-action-bar.component';
import { MetaService } from './core/services/meta.service';

@Component({
  selector: 'fsi-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappButtonComponent, MobileActionBarComponent],
  template: `
    <fsi-header></fsi-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <fsi-footer></fsi-footer>
    <fsi-whatsapp-button></fsi-whatsapp-button>
    <fsi-mobile-action-bar></fsi-mobile-action-bar>
  `,
})
export class AppComponent {
  private readonly metaService = inject(MetaService);

  constructor() {
    this.metaService.init();
  }
}
