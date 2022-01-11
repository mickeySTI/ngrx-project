import { AppStateInterface } from './../../state/app-state.intereface';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeedStateInterface } from './reducer/feed.reducer';

export const feedFeatureSelector = createFeatureSelector<
    AppStateInterface,
    FeedStateInterface
>('feed');

export const isLoadingSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState.isLoading
);

export const feedDataSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState.data
);

export const errorSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState.error
);
