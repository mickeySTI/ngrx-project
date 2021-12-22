import { BackendErrorsInterface } from 'src/app/shared/models/backend-errors.interface';
import { RegisterRequestInterface } from './../../models/register-request.interface';

import {
    isSubmittingSelector,
    validationErrorsSelector,
} from './../../state/auth.selectors';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/state/app-state.intereface';

import { onRegister } from './../../state/register.actions';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    isSubmitting$: Observable<boolean>;
    backendErrors$: Observable<BackendErrorsInterface | null>;

    constructor(
        private fb: FormBuilder,
        private store: Store<AppStateInterface>
    ) {}

    ngOnInit(): void {
        this.initializeForm();
        this.initializezValues();
    }

    initializeForm() {
        this.form = this.fb.group({
            username: ['', [Validators.required]],
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    initializezValues() {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    onSubmit() {
        const request: RegisterRequestInterface = {
            user: this.form.value,
        };
        this.store.dispatch(onRegister({ request }));
    }
}
