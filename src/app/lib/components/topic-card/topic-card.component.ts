import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-topic-card',
    standalone: true,
    imports: [],
    templateUrl: './topic-card.component.html',
    styleUrl: './topic-card.component.scss',
})
export class TopicCardComponent {
    @Input() title: string = '';
    @Input() description: string = '';
}
