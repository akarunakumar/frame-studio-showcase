import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

/**
 * SIMPLE SHOWCASE VERSION. Submits to a single lightweight backend
 * endpoint (see backend/contact-service) — no lead status tracking,
 * no admin login required to view submissions (they're emailed and
 * saved). Business contact details still come from real settings
 * once wired up — nothing invented here.
 */
@Component({
  selector: 'fsi-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  protected readonly propertyTypes = [
    'Apartment',
    'Villa',
    'Independent House',
    'Office',
    'Retail',
    'Restaurant',
    'Other',
  ];

  protected readonly budgetRanges = [
    { value: 'Below 5 Lakhs', label: 'Below ₹5 Lakhs' },
    { value: '5-10 Lakhs', label: '₹5–10 Lakhs' },
    { value: '10-20 Lakhs', label: '₹10–20 Lakhs' },
    { value: '20-30 Lakhs', label: '₹20–30 Lakhs' },
    { value: '30+ Lakhs', label: '₹30+ Lakhs' },
    { value: 'Not Decided', label: 'Not Decided' },
  ];

  protected readonly consultationForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: [''],
    location: ['', Validators.required],
    propertyType: ['', Validators.required],
    propertySize: [''],
    requirement: [''],
    budget: [''],
    preferredContactTime: [''],
    message: [''],
  });

  protected submitted = false;
  protected submitting = false;
  protected submitError: string | null = null;

  protected onSubmit(): void {
    if (this.consultationForm.invalid) {
      this.consultationForm.markAllAsTouched();
      return;
    }

    this.submitting = true;
    this.submitError = null;

    const value = this.consultationForm.getRawValue();
    this.contactService
      .submit({
        name: value.name,
        phone: value.phone,
        email: value.email || undefined,
        location: value.location,
        propertyType: value.propertyType,
        propertySize: value.propertySize || undefined,
        requirement: value.requirement || undefined,
        budget: value.budget || undefined,
        preferredContactTime: value.preferredContactTime || undefined,
        message: value.message || undefined,
      })
      .subscribe({
        next: () => {
          this.submitting = false;
          this.submitted = true;
        },
        error: (err) => {
          this.submitting = false;
          this.submitError = err?.message ?? 'Something went wrong. Please try again or use WhatsApp.';
        },
      });
  }
}
