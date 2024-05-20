import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topic } from '@lib/interfaces';
import { FlashCard, FlashCardModel } from '@lib/interfaces/flashcard.interface';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TopicService {
    constructor(private _http: HttpClient) {}

    getTopics(): Observable<Topic[]> {
        return this._http.get('assets/data/topics.json') as Observable<Topic[]>;
    }

    getTopicById(topicId: string): Observable<FlashCard[]> {
        const flashcards$ = this._http.get('assets/data/flashcards.json') as Observable<FlashCardModel[]>;

        return flashcards$.pipe(
            map((flashCards: FlashCardModel[]) => {
                return flashCards.filter((flashCard) => flashCard.topic_id === topicId);
            }),
            map((flashcards: FlashCardModel[]) => {
                return flashcards.map((flashcard: FlashCardModel) => new FlashCard(flashcard));
            }),
        );
    }
}
