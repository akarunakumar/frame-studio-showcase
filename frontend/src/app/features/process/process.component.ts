import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Numbering here is legitimate — this genuinely is a fixed sequence
 * (spec section 23), unlike the numbered-marker anti-pattern to avoid
 * elsewhere.
 */
@Component({
  selector: 'fsi-process',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
})
export class ProcessComponent {
  protected readonly steps = [
    { title: 'Consultation', description: 'We start by understanding your space, needs, and budget.' },
    { title: 'Site Visit', description: 'A designer visits in person to measure and assess the site.' },
    { title: 'Requirement Analysis', description: 'We put your priorities and constraints into a clear brief.' },
    { title: 'Concept Design', description: 'A first layout and material direction takes shape.' },
    { title: '3D Visualization', description: 'The concept is rendered in 3D so you can see it before it exists.' },
    { title: 'Design Approval', description: 'We refine the design with you until it is right.' },
    { title: 'Quotation', description: 'A transparent, itemized quote based on the approved design.' },
    { title: 'Material Selection', description: 'Finishes, fittings, and materials are chosen together.' },
    { title: 'Execution', description: 'Skilled trades carry out the approved design on site.' },
    { title: 'Quality Inspection', description: 'Every detail is checked against the approved design.' },
    { title: 'Handover', description: 'The finished space is handed over, ready to live or work in.' },
  ];
}
