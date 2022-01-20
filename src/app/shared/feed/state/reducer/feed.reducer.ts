import {
    onGetFeed,
    onGetFeedSuccess,
    onGetFeedFailure,
} from './../feed.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { GetFeedResponseInterface } from './../../models/getFeedResponse.interface';
import { routerNavigationAction } from '@ngrx/router-store';
export interface FeedStateInterface {
    isLoading: boolean;
    error: string | null;
    data: GetFeedResponseInterface | null;
}

const initialState: FeedStateInterface = {
    data: null,
    isLoading: false,
    error: null,
};

const feedReducer = createReducer(
    initialState,
    on(
        onGetFeed,
        (state): FeedStateInterface => ({
            ...state,
            isLoading: true,
        })
    ),
    on(
        onGetFeedSuccess,
        (state, action): FeedStateInterface => ({
            ...state,
            isLoading: false,
            data: action.feed,
        })
    ),
    on(
        onGetFeedFailure,
        (state, action): FeedStateInterface => ({
            ...state,
            isLoading: false,
            error: '',
        })
    ),
    on(routerNavigationAction, (): FeedStateInterface => initialState)
);

export function reducers(state: FeedStateInterface, action: Action) {
    return feedReducer(state, action);
}
