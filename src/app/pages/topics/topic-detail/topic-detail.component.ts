import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TermCardFormComponent } from '@lib/components/term-card-form/term-card-form.component';
import { TopicService } from '@lib/services';
import { Observable, map, switchMap } from 'rxjs';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';

const modules = [CommonModule, ReactiveFormsModule, DragDropModule];
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
        cards: FormArray<FormGroup>;
    }> = this._formBuilder.group({
        cards: this._formBuilder.array([this.createCardForm(), this.createCardForm()]),
    });

    get cards(): FormArray<FormGroup> {
        return this.topicForm.get('cards') as FormArray;
    }

    createCardForm(): FormGroup {
        return this._formBuilder.group({
            term: '',
            definition: '',
        });
    }

    addCard(): void {
        this.cards.push(this.createCardForm());
    }

    handleClickToDelete(index: number): void {
        this.cards.removeAt(index);
    }

    drop(event: CdkDragDrop<string[]>): void {
        this.moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
    }

    moveItemInArray(formArray: FormArray, fromIndex: number, toIndex: number): void {
        const dir = toIndex > fromIndex ? 1 : -1;
        const item = formArray.at(fromIndex);

        for (let i = fromIndex; i * dir < toIndex * dir; i = i + dir) {
            const current = formArray.at(i + dir);
            formArray.setControl(i, current);
        }
        formArray.setControl(toIndex, item);
    }
}
