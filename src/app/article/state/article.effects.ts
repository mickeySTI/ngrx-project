import { ArticleService } from './../../shared/services/article.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
    onGetArticleAction,
    onGetArticleFailureAction,
    onGetArticleSuccessAction,
} from './articles.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class GetArticleEffects {
    getArticle$ = createEffect(() =>
        this.actions$.pipe(
            ofType(onGetArticleAction),
            mergeMap(({ slug }) => {
                return this.articleService.getArticle(slug).pipe(
                    map((article) => {
                        return onGetArticleSuccessAction({ article });
                    }),
                    catchError(() => {
                        return of(onGetArticleFailureAction());
                    })
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private articleService: ArticleService
    ) {}
}
