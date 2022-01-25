import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { FeedModule } from '../shared/feed/feed.module';
import { BannerModule } from '../shared/banner/banner.module';
import { PopTagsModule } from '../shared/pop-tags/pop-tags.module';
import { RouterModule, Routes } from '@angular/router';
import { FeedTogglerModule } from '../shared/feed-toggler/feed-toggler.module';

const routes: Routes = [
    {
        path: 'tags/:slug',
        component: TagFeedComponent,
    },
];

@NgModule({
    declarations: [TagFeedComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedModule,
        BannerModule,
        PopTagsModule,
        FeedTogglerModule,
    ],
})
export class TagFeedModule {}
