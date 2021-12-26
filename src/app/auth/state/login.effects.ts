import { PersistanceService } from './../../shared/services/persistance.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CurrentUserInterface } from './../../shared/models/current-user.interface';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { onLogin, onLoginFailure, onLoginSuccess } from './login.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private persistanceService: PersistanceService
    ) {}

    onLoginRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(onLogin),
            switchMap(({ request }) => {
                return this.authService.login(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        this.persistanceService.set(
                            'accessToken',
                            currentUser.token
                        );
                        return onLoginSuccess({ currentUser });
                    }),
                    catchError((errorResponse: HttpErrorResponse) =>
                        of(
                            onLoginFailure({
                                errors: errorResponse.error.errors,
                            })
                        )
                    )
                );
            })
        )
    );

    onLoginSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(onLoginSuccess),
                tap(() => {
                    this.router.navigateByUrl('/');
                })
            ),
        { dispatch: false }
    );
}
