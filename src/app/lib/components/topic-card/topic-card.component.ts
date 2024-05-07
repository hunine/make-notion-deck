import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Topic } from '@lib/interfaces';

@Component({
    selector: 'app-topic-card',
    standalone: true,
    imports: [],
    templateUrl: './topic-card.component.html',
    styleUrl: './topic-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicCardComponent {
    @Input() topic: Topic = {
        id: '',
        title: '',
        description: '',
    };
    @Output() clickOnCard = new EventEmitter<string>();

    get id(): string {
        return this.topic.id;
    }

    get title(): string {
        return this.topic.title;
    }

    get description(): string {
        return this.topic.description;
    }

    handleClick(id: string): void {
        this.clickOnCard.emit(id);
    }
}
