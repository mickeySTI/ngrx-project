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
import { concatMap, switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class Registerffects {
    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(onRegister),
            switchMap(({ request }) => {
                return this.authService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        return onRegisterSucess({ currentUser });
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

    constructor(private actions$: Actions, private authService: AuthService) {}
}
