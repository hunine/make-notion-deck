import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicCardComponent } from '@lib/components/topic-card/topic-card.component';
import { Topic } from '@lib/interfaces';
import { TopicService } from '@lib/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-topic',
    standalone: true,
    imports: [CommonModule, TopicCardComponent],
    templateUrl: './topic.component.html',
    styleUrl: './topic.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicsComponent implements OnInit {
    topics$ = new Observable<Topic[]>();

    private _router = inject(Router);
    private _activatedRoute = inject(ActivatedRoute);
    private _topicService = inject(TopicService);

    ngOnInit(): void {
        this.topics$ = this._topicService.getTopics();
    }

    handleClick(id: string): void {
        this._router.navigate([id], {
            relativeTo: this._activatedRoute,
        });
    }
}
