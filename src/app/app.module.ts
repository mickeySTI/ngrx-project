import { FeedModule } from './shared/feed/feed.module';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { PersistanceService } from './shared/services/persistance.service';
import { TopBarModule } from './shared/top-bar/top-bar.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './shared/services/auth-interceptor.service';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AuthModule,
        TopBarModule,
        AppRoutingModule,
        StoreModule.forRoot({
            router: routerReducer,
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot([]),
        BrowserAnimationsModule,
        GlobalFeedModule,
        FeedModule,
    ],
    providers: [
        PersistanceService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
    exports: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
