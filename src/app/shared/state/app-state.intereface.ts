import { FeedStateInterface } from './../feed/state/reducer/feed.reducer';
import { AuthStateInterface } from 'src/app/auth/state/reducer/auth.reducer';

export interface AppStateInterface {
    auth: AuthStateInterface;
    feed: FeedStateInterface;
}
