import { AuthStateInterface } from 'src/app/auth/state/reducer/auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// feature seclector
export const authFeatureSelector =
    createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.validationErrors
);
