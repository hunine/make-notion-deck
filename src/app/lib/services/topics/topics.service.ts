import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topic } from '@lib/interfaces';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TopicsService {
    constructor(private _http: HttpClient) {}

    getTopics(): Observable<Topic[]> {
        return this._http.get('assets/data/topics.json') as Observable<Topic[]>;
    }
}