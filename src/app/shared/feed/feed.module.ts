import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { FeedEffects } from './state/feed.effects';
import { reducers } from './state/reducer/feed.reducer';
import { FeedService } from './services/feed.service';

@NgModule({
    declarations: [FeedComponent],
    imports: [
        CommonModule,
        EffectsModule.forFeature([FeedEffects]),
        StoreModule.forFeature('feedState', reducers),
    ],
    exports: [FeedComponent],
    providers: [FeedService],
})
export class FeedModule {}
