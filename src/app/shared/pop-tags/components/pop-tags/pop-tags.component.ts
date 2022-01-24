import { OnGetPopularTags } from './../../state/popular-tags.actions';
import { Store, select } from '@ngrx/store';
import { PopularTagType } from './../../../models/popular-tag.type';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
    errorSelector,
    isLoadingSelector,
    popularTagsSelector,
} from '../../state/popular-tags.selectors';

@Component({
    selector: 'mc-pop-tags',
    templateUrl: './pop-tags.component.html',
    styleUrls: ['./pop-tags.component.scss'],
})
export class PopTagsComponent implements OnInit {
    popularTags$: Observable<PopularTagType[] | null>;
    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;

    constructor(private store$: Store) {}

    ngOnInit(): void {
        this.initializeData();
        this.fetchData();
    }

    fetchData() {
        this.store$.dispatch(OnGetPopularTags());
    }

    initializeData() {
        this.isLoading$ = this.store$.pipe(select(isLoadingSelector));
        this.error$ = this.store$.pipe(select(errorSelector));
        this.popularTags$ = this.store$.pipe(select(popularTagsSelector));
    }
}
