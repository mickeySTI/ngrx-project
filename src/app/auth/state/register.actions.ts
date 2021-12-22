import { BackendErrorsInterface } from 'src/app/shared/models/backend-errors.interface';
import { CurrentUserInterface } from './../../shared/models/current-user.interface';
import { RegisterRequestInterface } from './../models/register-request.interface';
import { ActionTypes } from './action-types';
import { createAction, props } from '@ngrx/store';

export const onRegister = createAction(
    ActionTypes.REGISTER,
    props<{ request: RegisterRequestInterface }>()
);

export const onRegisterSucess = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>()
);

export const onRegisterFailure = createAction(
    ActionTypes.REGISTER_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
);
