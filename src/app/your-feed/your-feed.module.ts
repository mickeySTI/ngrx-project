import { FeedTogglerModule } from './../shared/feed-toggler/feed-toggler.module';
import { PopTagsModule } from './../shared/pop-tags/pop-tags.module';
import { BannerModule } from './../shared/banner/banner.module';
import { FeedModule } from './../shared/feed/feed.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFeedComponent } from './components/your-feed/your-feed.component';

const routes: Routes = [
    {
        path: 'feed',
        component: YourFeedComponent,
    },
];

@NgModule({
    declarations: [YourFeedComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedModule,
        BannerModule,
        PopTagsModule,
        FeedTogglerModule,
    ],
})
export class YourFeedModule {}
