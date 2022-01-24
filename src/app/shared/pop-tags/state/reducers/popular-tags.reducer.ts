import {
    OnGetPopularTagsFailure,
    OnGetPopularTagsSuccess,
} from './../popular-tags.actions';

import { Action, createReducer, on } from '@ngrx/store';
import { OnGetPopularTags } from '../popular-tags.actions';
import { PopularTagType } from './../../../models/popular-tag.type';

export interface PopularTagsStateInterface {
    data: PopularTagType[] | null;
    isLoading: boolean;
    error: string | null;
}

export const initialState: PopularTagsStateInterface = {
    data: null,
    isLoading: false,
    error: null,
};

const popularTagsReducer = createReducer(
    initialState,
    on(
        OnGetPopularTags,
        (state): PopularTagsStateInterface => ({
            ...state,
            isLoading: true,
        })
    ),
    on(
        OnGetPopularTagsSuccess,
        (state, action): PopularTagsStateInterface => ({
            ...state,
            isLoading: false,
            data: action.popularTags,
        })
    ),
    on(
        OnGetPopularTagsFailure,
        (state): PopularTagsStateInterface => ({
            ...state,
            isLoading: false,
        })
    )
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
    return popularTagsReducer(state, action);
}
