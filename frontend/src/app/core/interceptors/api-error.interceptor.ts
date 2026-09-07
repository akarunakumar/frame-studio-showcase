import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

/**
 * Normalizes API errors so components can show a single, friendly
 * toast/message regardless of which microservice responded. Backend
 * errors follow the standard { success:false, message, errors } shape
 * (spec section 41) — this interceptor extracts `message` for the UI
 * and logs the full error for debugging.
 */
export const apiErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      const friendlyMessage: string =
        error?.error?.message ?? 'Something went wrong. Please try again.';
      console.error(`[API error] ${req.method} ${req.url}`, error);
      return throwError(() => new Error(friendlyMessage));
    })
  );
};
