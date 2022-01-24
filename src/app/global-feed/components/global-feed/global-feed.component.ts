import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mc-global-feed',
    templateUrl: './global-feed.component.html',
    styleUrls: ['./global-feed.component.scss'],
})
export class GlobalFeedComponent implements OnInit {
    apiUrl = '/articles';
    //Added this since not getting any tags from api/db
    tagsList: string[] = ['this is a pop tag', 'Another Pop Tag', "Mike's tag"];
    constructor() {}

    ngOnInit(): void {}
}
