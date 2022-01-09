import { ArticleInterface } from '../../models/article.interface';

export interface GetFeedResponseInterface {
    articles: ArticleInterface[];
    articlesCount: number;
}
