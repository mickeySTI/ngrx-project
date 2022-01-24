import { PopTagsModule } from './../shared/pop-tags/pop-tags.module';
import { TagListModule } from './../shared/tag-list/tag-list.module';
import { BannerModule } from './../shared/banner/banner.module';
import { FeedModule } from './../shared/feed/feed.module';
import { FeedComponent } from './../shared/feed/components/feed/feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalFeedRoutingModule } from './global-feed-routing.module';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';

@NgModule({
    imports: [
        CommonModule,
        GlobalFeedRoutingModule,
        FeedModule,
        BannerModule,
        TagListModule,
        PopTagsModule,
    ],
    declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
