import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fsi-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
}
