import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../shared/services/article.service';
import { ArticleComponent } from './components/article/article.component';
import * as articleReducer from './state/reducers/article.reducer';

@NgModule({
    declarations: [ArticleComponent],
    imports: [
        CommonModule,
        RouterModule,
        StoreModule.forFeature('feed', articleReducer),
    ],
    providers: [ArticleService],
})
export class ArticleModule {}
