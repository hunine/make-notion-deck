import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'topics',
        loadComponent: async () => (await import('./topic/topic.component')).TopicsComponent,
    },
    {
        path: ':id',
        loadComponent: async () => (await import('./topic-detail/topic-detail.component')).TopicDetailComponent,
    },
];
