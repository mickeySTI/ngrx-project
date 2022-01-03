import {
    isAnonymousSelector,
    currentUserSelector,
} from './../../../../auth/state/auth.selectors';
import { AppStateInterface } from './../../../state/app-state.intereface';
import { CurrentUserInterface } from './../../../models/current-user.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { isLoggedInSelector } from 'src/app/auth/state/auth.selectors';

@Component({
    selector: 'mc-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
    isLoggedIn$: Observable<boolean>;
    isAnonumous$: Observable<boolean>;
    currentUser$: Observable<CurrentUserInterface | null>;

    constructor(private store: Store<AppStateInterface>) {}

    ngOnInit(): void {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
        this.isAnonumous$ = this.store.pipe(select(isAnonymousSelector));
        this.currentUser$ = this.store.pipe(select(currentUserSelector));
    }
}
