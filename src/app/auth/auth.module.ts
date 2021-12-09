import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authReducer } from './state/reducer/auth.reducer';

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature('auth', authReducer),
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class AuthModule {}
