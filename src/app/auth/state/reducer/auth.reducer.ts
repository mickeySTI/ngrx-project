import { onLoginSuccess, onLoginFailure } from './../login.actions';
import { BackendErrorsInterface } from 'src/app/shared/models/backend-errors.interface';
import { CurrentUserInterface } from './../../../shared/models/current-user.interface';
import {
    onRegister,
    onRegisterFailure,
    onRegisterSucess,
} from './../register.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { onLogin } from '../login.actions';

// state interface
export interface AuthStateInterface {
    isSubmitting: boolean;
    currentUser: CurrentUserInterface | null;
    isLoggedIn: boolean | null;
    validationErrors: BackendErrorsInterface | null;
}
//initial state
const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null,
};

const _authReducer = createReducer(
    initialState,
    on(
        onRegister,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
            validationErrors: null,
        })
    ),

    on(
        onRegisterSucess,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser,
        })
    ),

    on(
        onRegisterFailure,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors,
        })
    ),

    on(
        onLogin,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
            validationErrors: null,
        })
    ),
    on(
        onLoginSuccess,
        (state, action): AuthStateInterface => ({
            ...state,
            isLoggedIn: true,
            isSubmitting: false,
            currentUser: action.currentUser,
        })
    ),
    on(
        onLoginFailure,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors,
        })
    )
);

export function authReducer(state: AuthStateInterface, action: Action) {
    return _authReducer(state, action);
}
