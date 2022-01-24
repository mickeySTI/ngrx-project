import { PopularTagType } from './../../models/popular-tag.type';
import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './action-types';

export const OnGetPopularTags = createAction(ActionTypes.ON_GET_POPULAR_TAGS);

export const OnGetPopularTagsSuccess = createAction(
    ActionTypes.ON_GET_POPULAR_TAGS_SUCCESS,
    props<{ popularTags: PopularTagType[] }>()
);

export const OnGetPopularTagsFailure = createAction(
    ActionTypes.ON_GET_POPULAR_TAGS_FAILURE
);
