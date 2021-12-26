import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersistanceService } from './../shared/services/persistance.service';
import { BackendErrorsModule } from './../shared/backend-errors/backend-errors.module';
import { Registerffects } from './state/register.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authReducer } from './state/reducer/auth.reducer';
import { LoginComponent } from './components/login/login.component';
import { LoginEffects } from './state/login.effects';
import { MatCommonModule } from '@angular/material/core';

@NgModule({
    declarations: [RegisterComponent, LoginComponent],
    imports: [
        MatInputModule,
        MatCommonModule,
        CommonModule,
        EffectsModule.forFeature([Registerffects, LoginEffects]),
        StoreModule.forFeature('auth', authReducer),
        AuthRoutingModule,
        BackendErrorsModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
    ],
    providers: [AuthService, PersistanceService],
})
export class AuthModule {}
