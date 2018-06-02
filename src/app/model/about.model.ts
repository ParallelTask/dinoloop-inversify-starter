export class About {
    _id?: string;
    title?: string = 'This is title';
    content?: string = 'This is content';
    createdDate?: string;
    modified?: [{
        name?: string;
        timestamp?: string;
        action?: string;
        fields?: string[];
    }];
    isDeleted?: boolean;
}
