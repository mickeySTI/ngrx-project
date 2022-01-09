import { FeedModule } from './../shared/feed/feed.module';
import { FeedComponent } from './../shared/feed/components/feed/feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalFeedRoutingModule } from './global-feed-routing.module';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';

@NgModule({
    imports: [CommonModule, GlobalFeedRoutingModule, FeedModule],
    declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
