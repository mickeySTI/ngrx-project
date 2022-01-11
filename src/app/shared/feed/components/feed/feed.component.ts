import {
    feedDataSelector,
    errorSelector,
    isLoadingSelector,
} from './../../state/feed.selectors';
import { GetFeedResponseInterface } from './../../models/getFeedResponse.interface';
import { onGetFeed } from './../../state/feed.actions';
import { AppStateInterface } from './../../../state/app-state.intereface';
import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'mc-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
    @Input('apiUrl') apiUrlProps: string;

    feed$: Observable<GetFeedResponseInterface | null>;
    error$: Observable<string | null>;
    isLoading$: Observable<boolean>;

    constructor(private store$: Store<AppStateInterface>) {}

    ngOnInit(): void {
        this.initilizeValues();
        this.fetchData();
    }

    initilizeValues() {
        this.feed$ = this.store$.pipe(select(feedDataSelector));
        this.error$ = this.store$.pipe(select(errorSelector));
        this.isLoading$ = this.store$.pipe(select(isLoadingSelector));
    }

    fetchData(): void {
        this.store$.dispatch(onGetFeed({ url: this.apiUrlProps }));
    }
}
