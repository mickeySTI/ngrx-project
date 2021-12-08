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

//reducer function
const authReducer = createReducer(
    initialState,
    on(
        onRegister,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
        })
    )
);

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}
