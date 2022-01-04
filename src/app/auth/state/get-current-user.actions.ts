import { CurrentUserInterface } from './../../shared/models/current-user.interface';
import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './action-types';

export const onGetCurrentUser = createAction(ActionTypes.GET_CURRENT);

export const onGetCurrentUserSuccess = createAction(
    ActionTypes.GET_CURRENT_USER_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>()
);

export const onGetCurrentUserFailure = createAction(
    ActionTypes.GET_CURRENT_USER_FAILURE
);
