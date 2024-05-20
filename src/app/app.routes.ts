import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'topics',
        loadChildren: () => import('@pages/topics').then((component) => component.routes),
    },
];
