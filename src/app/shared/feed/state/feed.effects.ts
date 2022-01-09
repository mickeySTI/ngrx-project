import { GetFeedResponseInterface } from './../models/getFeedResponse.interface';
import { map, switchMap, catchError } from 'rxjs/operators';
import { onGetFeed, onGetFeedSuccess, onGetFeedFailure } from './feed.actions';
import { FeedService } from './../services/feed.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class FeedEffects {
    constructor(private actions$: Actions, private feedService: FeedService) {}

    onGetFeedRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(onGetFeed),
            switchMap(({ url }) => {
                return this.feedService.getFeed(url).pipe(
                    map((feed: GetFeedResponseInterface) => {
                        return onGetFeedSuccess({ feed });
                    }),
                    catchError(() => {
                        return of(onGetFeedFailure());
                    })
                );
            })
        )
    );
}
