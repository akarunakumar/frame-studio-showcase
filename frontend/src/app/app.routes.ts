import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Frame Studio Interiors — We Frame Your Dream Space',
    data: {
      description:
        'We frame your dream space — modular interiors at factory prices, with a 45-day execution timeline and 10-year warranty.',
    },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us — Frame Studio Interiors',
    data: {
      description:
        'Design-led interiors with a focus on functionality, craftsmanship, quality and personalized spaces.',
    },
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/services-list.component').then((m) => m.ServicesListComponent),
    title: 'Interior Design Services — Frame Studio Interiors',
    data: {
      description:
        'Residential and commercial interior design services — modular kitchens, wardrobes, false ceilings, lighting, custom furniture and complete interior execution.',
    },
  },
  {
    path: 'services/:slug',
    loadComponent: () =>
      import('./features/services/service-detail.component').then((m) => m.ServiceDetailComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects-list.component').then((m) => m.ProjectsListComponent),
    title: 'Our Projects — Frame Studio Interiors',
    data: {
      description:
        'Residential and commercial interior design projects — apartments, villas, offices, and more, with location, style, and category filters.',
    },
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./features/projects/project-detail.component').then((m) => m.ProjectDetailComponent),
  },
  {
    path: 'before-after',
    loadComponent: () =>
      import('./features/before-after/before-after.component').then((m) => m.BeforeAfterComponent),
    title: 'Before & After — Frame Studio Interiors',
    data: {
      description:
        'See interior transformations before and after — drag to compare kitchens, living rooms, and bedrooms redesigned by Frame Studio Interiors.',
    },
  },
  {
    path: 'design-ideas',
    loadComponent: () =>
      import('./features/design-ideas/design-ideas-list.component').then(
        (m) => m.DesignIdeasListComponent
      ),
    title: 'Design Ideas — Frame Studio Interiors',
    data: {
      description:
        'Browse interior design inspiration across modern, luxury, minimalist, Scandinavian, industrial, and Indian modern styles.',
    },
  },
  {
    path: 'design-ideas/:slug',
    loadComponent: () =>
      import('./features/design-ideas/design-idea-detail.component').then(
        (m) => m.DesignIdeaDetailComponent
      ),
  },
  {
    path: 'process',
    loadComponent: () =>
      import('./features/process/process.component').then((m) => m.ProcessComponent),
    title: 'Our Process — Frame Studio Interiors',
    data: {
      description:
        'From first consultation to handover — the eleven-step process Frame Studio Interiors follows on every project.',
    },
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./features/testimonials/testimonials.component').then((m) => m.TestimonialsComponent),
    title: 'Client Testimonials — Frame Studio Interiors',
    data: {
      description: 'What clients say about working with Frame Studio Interiors on their homes and workplaces.',
    },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact Us — Frame Studio Interiors',
    data: {
      description:
        'Get in touch with Frame Studio Interiors for a free consultation on your residential or commercial interior project.',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
