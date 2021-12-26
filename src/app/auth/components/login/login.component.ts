import { AuthService } from './../../services/auth.service';
import { AppStateInterface } from 'src/app/shared/state/app-state.intereface';
import {
    isSubmittingSelector,
    validationErrorsSelector,
} from './../../state/auth.selectors';
import { onLogin } from './../../state/login.actions';
import { BackendErrorsInterface } from 'src/app/shared/models/backend-errors.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { LoginRequestInterface } from '../../models/login-request.interface';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    isSubmitting$: Observable<boolean>;
    backendErrors$: Observable<BackendErrorsInterface | null>;
    formInvalid: boolean;
    constructor(
        private fb: FormBuilder,
        private store: Store<AppStateInterface>,
        private service: AuthService
    ) {}

    ngOnInit(): void {
        this.initializeForm();
        this.initilizeValues();
    }

    initializeForm() {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    initilizeValues() {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    onSubmit() {
        const request: LoginRequestInterface = { user: this.form.value };
        this.store.dispatch(onLogin({ request }));
    }

    validateForm() {
        if (this.form.valid) {
            this.onSubmit();
        } else {
            this.formInvalid = true;
        }
    }
}
