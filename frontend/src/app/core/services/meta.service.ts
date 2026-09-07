import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

/**
 * Reads a `description` value off each route's `data` and writes it
 * to the meta description tag on every navigation. Falls back to a
 * default when a route doesn't specify one — never leaves a stale
 * description from the previous page.
 */
@Injectable({ providedIn: 'root' })
export class MetaService {
  private readonly router = inject(Router);
  private readonly meta = inject(Meta);

  private readonly defaultDescription =
    'Thoughtfully designed interiors, executed with precision for homes, offices and commercial spaces.';

  init(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const description = this.deepestDescription(this.router.routerState.snapshot.root);
      this.meta.updateTag({ name: 'description', content: description ?? this.defaultDescription });
    });
  }

  private deepestDescription(snapshot: ActivatedRouteSnapshot): string | undefined {
    let current: ActivatedRouteSnapshot | null = snapshot;
    let description: string | undefined;
    while (current) {
      if (current.data['description']) {
        description = current.data['description'];
      }
      current = current.firstChild;
    }
    return description;
  }
}
