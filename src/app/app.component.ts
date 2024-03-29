import { onGetCurrentUser } from './auth/state/get-current-user.actions';
import { AppStateInterface } from './shared/state/app-state.intereface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private store: Store<AppStateInterface>) {}

    ngOnInit(): void {
        this.store.dispatch(onGetCurrentUser());
    }
}
