import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TermCardFormComponent } from '@lib/components/term-card-form/term-card-form.component';
import { TopicService } from '@lib/services';
import { TermCardFormType } from '@lib/types/term-card-form.type';
import { Observable, map, switchMap } from 'rxjs';

const modules = [CommonModule, ReactiveFormsModule];
const components = [TermCardFormComponent];

@Component({
    selector: 'app-topic-detail',
    standalone: true,
    imports: [...modules, ...components],
    templateUrl: './topic-detail.component.html',
    styleUrl: './topic-detail.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicDetailComponent {
    private _formBuilder = inject(NonNullableFormBuilder);
    private _topicService = inject(TopicService);
    private _activatedRoute = inject(ActivatedRoute);

    topicId$: Observable<string> = this._activatedRoute.params.pipe(map((params) => params['id'] as string));
    topicData$ = this.topicId$.pipe(
        switchMap((id) => this._topicService.getTopicById(id)),
        // tap((topics) => {
        //     topics.forEach((topic) => {
        //         this.cards.push(this.createQuestionForm(topic));
        //     });
        // }),
    );

    topicForm: FormGroup<{
        cards: FormArray;
    }> = this._formBuilder.group({
        cards: this._formBuilder.array([this.createCardForm(), this.createCardForm()]),
    });

    get cards(): FormArray {
        return this.topicForm.get('cards') as FormArray;
    }

    createCardForm(): FormControl<TermCardFormType> {
        return this._formBuilder.control({
            term: '',
            definition: '',
        });
    }

    addCard(): void {
        this.cards.push(this.createCardForm());
    }
}
