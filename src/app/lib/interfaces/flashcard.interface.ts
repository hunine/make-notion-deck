/* eslint-disable @typescript-eslint/naming-convention */

export interface FlashCardModel {
    id: string;
    front: string;
    back: string;
    topic_id: string;
}

export class FlashCard {
    id: string;
    front: string;
    back: string;
    topicId: string;

    constructor(initData: FlashCardModel) {
        const { id, front, back, topic_id } = initData;

        this.id = id;
        this.front = front;
        this.back = back;
        this.topicId = topic_id;
    }
}
