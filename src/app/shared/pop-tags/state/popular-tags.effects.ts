import { PopularTagType } from './../../models/popular-tag.type';
import { switchMap, map, catchError } from 'rxjs/operators';
import { PopularTagsService } from './../services/pop-tags.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
    OnGetPopularTags,
    OnGetPopularTagsFailure,
    OnGetPopularTagsSuccess,
} from './popular-tags.actions';
import { of } from 'rxjs';

@Injectable()
export class PopularTagsEffects {
    constructor(
        private actions$: Actions,
        private popularTagsService: PopularTagsService
    ) {}

    OnGetPopularTagsRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(OnGetPopularTags),
            switchMap(() => {
                return this.popularTagsService.getPopularTags().pipe(
                    map((popularTags: PopularTagType[]) => {
                        return OnGetPopularTagsSuccess({
                            popularTags,
                        });
                    }),
                    catchError(() => of(OnGetPopularTagsFailure()))
                );
            })
        )
    );
}
