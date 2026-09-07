import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ContactFormPayload {
  name: string;
  phone: string;
  email?: string;
  location: string;
  propertyType: string;
  propertySize?: string;
  requirement?: string;
  budget?: string;
  preferredContactTime?: string;
  message?: string;
}

interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data: T;
}

/**
 * Simple showcase version — one lightweight endpoint, no admin/auth,
 * no lead status tracking. Submissions are saved and (if SMTP is
 * configured) emailed to the business owner. See backend/contact-service.
 */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  submit(payload: ContactFormPayload): Observable<ApiEnvelope<{ id: number }>> {
    return this.http.post<ApiEnvelope<{ id: number }>>(`${environment.apiBaseUrl}/contact`, payload);
  }
}
