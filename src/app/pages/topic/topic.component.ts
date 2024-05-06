import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TopicCardComponent } from '@lib/components/topic-card/topic-card.component';
import { Topic } from '@lib/interfaces';
import { TopicsService } from '@lib/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-topic',
    standalone: true,
    imports: [CommonModule, TopicCardComponent],
    templateUrl: './topic.component.html',
    styleUrl: './topic.component.scss',
})
export class TopicsComponent implements OnInit {
    topics$ = new Observable<Topic[]>();

    constructor(private _topicsService: TopicsService) {}

    ngOnInit(): void {
        this.topics$ = this._topicsService.getTopics();
    }
}
