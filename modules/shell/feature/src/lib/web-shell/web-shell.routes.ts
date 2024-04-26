import { Route } from '@angular/router';
import { LayoutComponent } from '@make-notion-deck/layout';

export const webShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [],
  },
];
