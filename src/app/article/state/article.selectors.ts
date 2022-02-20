import { ArticleStateInterface } from './reducers/article.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const articleFeatureSelector =
    createFeatureSelector<ArticleStateInterface>('feed');

export const isLoadingSelector = createSelector(
    articleFeatureSelector,
    (state) => state.isLoading
);

export const errorSelector = createSelector(
    articleFeatureSelector,
    (state) => state.error
);

export const articleSelector = createSelector(
    articleFeatureSelector,
    (state) => state.data
);
