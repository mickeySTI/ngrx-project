import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PopularTagsStateInterface } from './reducers/popular-tags.reducer';

export const popularTagsFeatureSelector =
    createFeatureSelector<PopularTagsStateInterface>('popularTagsState');

export const popularTagsSelector = createSelector(
    popularTagsFeatureSelector,
    (state: PopularTagsStateInterface) => state.data
);

export const isLoadingSelector = createSelector(
    popularTagsFeatureSelector,
    (state: PopularTagsStateInterface) => state.isLoading
);

export const errorSelector = createSelector(
    popularTagsFeatureSelector,
    (state: PopularTagsStateInterface) => state.error
);
