import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'mc-tag-feed',
    templateUrl: './tag-feed.component.html',
    styleUrls: ['./tag-feed.component.scss'],
})
export class TagFeedComponent implements OnInit {
    apiUrl: string;
    tagName: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.tagName = this.route.snapshot.paramMap.get('slug');
        console.log('this tagname', this.tagName);
        this.apiUrl = `/articles?tag=${this.tagName}`;
    }
}
