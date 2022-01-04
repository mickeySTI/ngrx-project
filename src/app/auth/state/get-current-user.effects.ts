import { PersistanceService } from './../../shared/services/persistance.service';
import { switchMap, catchError, map } from 'rxjs/operators';
import { AuthService } from './../services/auth.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
    onGetCurrentUser,
    onGetCurrentUserFailure,
    onGetCurrentUserSuccess,
} from './get-current-user.actions';
import { of } from 'rxjs';

@Injectable()
export class GetCurrentUserEffects {
    onGetCurrentUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(onGetCurrentUser),
            switchMap(() => {
                const token = this.persistanceService.get('accessToken');
                if (!token) {
                    return of(onGetCurrentUserFailure());
                }
                return this.authService.getCurrentUser().pipe(
                    map((currentUser) => {
                        return onGetCurrentUserSuccess({ currentUser });
                    }),
                    catchError(() => of(onGetCurrentUserFailure()))
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistanceService: PersistanceService
    ) {}
}
