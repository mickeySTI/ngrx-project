import { BackendErrorsInterface } from 'src/app/shared/models/backend-errors.interface';
import { CurrentUserInterface } from './../../shared/models/current-user.interface';
import { createAction, props } from '@ngrx/store';
import { LoginRequestInterface } from '../models/login-request.interface';
import { ActionTypes } from './action-types';

export const onLogin = createAction(
    ActionTypes.LOGIN,
    props<{ request: LoginRequestInterface }>()
);

export const onLoginSuccess = createAction(
    ActionTypes.LOGIN,
    props<{ currentUser: CurrentUserInterface }>()
);

export const onLoginFailure = createAction(
    ActionTypes.LOGIN,
    props<{ errors: BackendErrorsInterface }>()
);
