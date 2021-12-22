import { PersistanceService } from './../../shared/services/persistance.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CurrentUserInterface } from '../../shared/models/current-user.interface';
import { AuthService } from '../services/auth.service';
import {
    onRegister,
    onRegisterSucess,
    onRegisterFailure,
} from './register.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class Registerffects {
    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(onRegister),
            switchMap(({ request }) => {
                return this.authService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        this.persistanceService.set(
                            'accessToken',
                            currentUser.token
                        );
                        return onRegisterSucess({ currentUser });
                    }),

                    tap(() => {
                        this.router.navigateByUrl('/');
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                            onRegisterFailure({
                                errors: errorResponse.error.errors,
                            })
                        );
                    })
                );
            })
        )
    );

    redirectAfterOnRegisterSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(onRegisterSucess),
                tap(() => {
                    this.router.navigateByUrl('/');
                })
            ),
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistanceService: PersistanceService,
        private router: Router
    ) {}
}
