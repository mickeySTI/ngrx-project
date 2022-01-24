import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {
    feedDataSelector,
    errorSelector,
    isLoadingSelector,
} from './../../state/feed.selectors';
import { GetFeedResponseInterface } from './../../models/getFeedResponse.interface';
import { onGetFeed } from './../../state/feed.actions';
import { AppStateInterface } from './../../../state/app-state.intereface';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { stringify, parseUrl } from 'query-string';

@Component({
    selector: 'mc-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
    @Input('apiUrl') apiUrlProps: string;

    feed$: Observable<GetFeedResponseInterface | null>;
    error$: Observable<string | null>;
    isLoading$: Observable<boolean>;
    limit = environment.limit;
    baseUrl: string;
    queryParamsSubscription: Subscription;
    currentPage: number;
    // Added this to confirm that tags worked since none of the articles had tags
    testTags: string[] = ['this tag', 'that tag'];
    constructor(
        private store$: Store<AppStateInterface>,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.initilizeValues();
        this.initializeListeners();
    }

    initilizeValues() {
        this.feed$ = this.store$.pipe(select(feedDataSelector));
        this.error$ = this.store$.pipe(select(errorSelector));
        this.isLoading$ = this.store$.pipe(select(isLoadingSelector));
        this.baseUrl = this.router.url.split('?')[0];
    }

    initializeListeners(): void {
        this.queryParamsSubscription = this.route.queryParams.subscribe(
            (params: Params) => {
                this.currentPage = Number(params.page || '1');
                this.fetchFeed();
            }
        );
    }

    fetchFeed(): void {
        const offset = this.currentPage * this.limit - this.limit;
        const parsedUrl = parseUrl(this.apiUrlProps);
        const stringifiedParams = stringify({
            limit: this.limit,
            offset,
            ...parsedUrl.query,
        });
        const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
        console.log('apiUrlWithParams', apiUrlWithParams);
        this.store$.dispatch(onGetFeed({ url: apiUrlWithParams }));
    }

    ngOnDestroy(): void {
        this.queryParamsSubscription.unsubscribe();
    }
}
