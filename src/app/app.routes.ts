/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'topics',
        loadChildren: () => import('@pages/topics').then((component) => component.routes),
    },
];
