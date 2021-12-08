import { RegisterRequestInterface } from './../models/register-request.interface';
import { ActionTypes } from './action-types';
import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const onRegister = createAction(
    ActionTypes.REGISTER,
    props<{ request: RegisterRequestInterface }>()
);

export const onRegisterSucess = createAction(ActionTypes.REGISTER_SUCCESS);

export const onRegisterFailure = createAction(
    ActionTypes.REGISTER_FAILURE,
    props<{ error: HttpErrorResponse }>()
);
