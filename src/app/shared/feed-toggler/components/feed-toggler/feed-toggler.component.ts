import { isLoggedInSelector } from 'src/app/auth/state/auth.selectors';
import { Store, select } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'mc-feed-toggler',
    templateUrl: './feed-toggler.component.html',
    styleUrls: ['./feed-toggler.component.scss'],
})
export class FeedTogglerComponent implements OnInit {
    @Input('tagName') tagNameProps: string;
    isLoggedIn$: Observable<boolean>;

    constructor(private store$: Store) {}

    ngOnInit(): void {
        this.initializeValues();
    }

    initializeValues() {
        this.isLoggedIn$ = this.store$.pipe(select(isLoggedInSelector));
    }
}
