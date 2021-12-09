import { onRegister } from './../register.actions';
import { Action, createReducer, on } from '@ngrx/store';

// state interface
export interface AuthStateInterface {
    isSubmitting: boolean;
}
//initial state
const initialState: AuthStateInterface = {
    isSubmitting: false,
};

const _authReducer = createReducer(
    initialState,
    on(
        onRegister,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
        })
    )
);

//reducer function
export function authReducer(state: AuthStateInterface, action: Action) {
    return _authReducer(state, action);
}
