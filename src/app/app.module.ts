import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AuthModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers, {
            metaReducers,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
