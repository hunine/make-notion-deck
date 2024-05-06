import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'topics',
        loadComponent: async () => (await import('./topic.component')).TopicsComponent,
    },
];
