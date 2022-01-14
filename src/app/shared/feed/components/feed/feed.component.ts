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

    constructor(
        private store$: Store<AppStateInterface>,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.initilizeValues();
        this.fetchData();
        this.initializeListeners();
    }

    initilizeValues() {
        this.feed$ = this.store$.pipe(select(feedDataSelector));
        this.error$ = this.store$.pipe(select(errorSelector));
        this.isLoading$ = this.store$.pipe(select(isLoadingSelector));
        this.baseUrl = this.router.url.split('?')[0];
    }

    initializeListeners(): void {
        this.queryParamsSubscription = this.route.queryParamMap.subscribe(
            (params: Params) => {
                this.currentPage = Number(params.page || '1');
                console.log('currentPage', this.currentPage);
            }
        );
    }

    fetchData(): void {
        this.store$.dispatch(onGetFeed({ url: this.apiUrlProps }));
    }

    ngOnDestroy(): void {
        this.queryParamsSubscription.unsubscribe();
    }
}
