import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-topic-detail',
    standalone: true,
    imports: [],
    templateUrl: './topic-detail.component.html',
    styleUrl: './topic-detail.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicDetailComponent {
    constructor() {}
}
