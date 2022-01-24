import { FeedStateInterface } from './../feed/state/reducer/feed.reducer';
import { AuthStateInterface } from 'src/app/auth/state/reducer/auth.reducer';
import { PopularTagsStateInterface } from '../pop-tags/state/reducers/popular-tags.reducer';

export interface AppStateInterface {
    auth: AuthStateInterface;
    feed: FeedStateInterface;
    popularTags: PopularTagsStateInterface;
}
