import { PersistanceService } from './../shared/services/persistance.service';
import { BackendErrorsModule } from './../shared/backend-errors/backend-errors.module';
import { Registerffects } from './state/register.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authReducer } from './state/reducer/auth.reducer';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [RegisterComponent, LoginComponent],
    imports: [
        CommonModule,
        EffectsModule.forFeature([Registerffects]),
        StoreModule.forFeature('auth', authReducer),
        AuthRoutingModule,
        BackendErrorsModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [AuthService, PersistanceService],
})
export class AuthModule {}
