import { GetFeedResponseInterface } from './../models/getFeedResponse.interface';
import { ActionTypes } from './action-types';
import { createAction, props } from '@ngrx/store';

export const onGetFeed = createAction(
    ActionTypes.GET_FEED,
    props<{ url: string }>()
);

export const onGetFeedSuccess = createAction(
    ActionTypes.GET_FEED_SUCCESS,
    props<{ feed: GetFeedResponseInterface }>()
);

export const onGetFeedFailure = createAction(ActionTypes.GET_FEED_FAILURE);
