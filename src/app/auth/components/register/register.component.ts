import { isSubmittingSelector } from './../../state/auth.selectors';
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
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    initializezValues() {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    }

    onSubmit() {
        if (this.form.valid) {
            this.store.dispatch(onRegister(this.form.value));
        }
    }
}
