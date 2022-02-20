import { ArticleInterface } from './../../shared/models/article.interface';
import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './action-types';

export const onGetArticleAction = createAction(
    ActionTypes.GET_ARTICLE,
    props<{ slug: string }>()
);

export const onGetArticleSuccessAction = createAction(
    ActionTypes.GET_ARTICLE_SUCCESS,
    props<{ article: ArticleInterface }>()
);

export const onGetArticleFailureAction = createAction(
    ActionTypes.GET_ARTICLE_FAILURE
);
