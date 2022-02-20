import { ArticleInterface } from './../models/article.interface';
import { GetFeedResponseInterface } from './../feed/models/getFeedResponse.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetArticleResponseInterface } from '../models/get-article-response.interface';

@Injectable()
export class ArticleService {
    constructor(private http: HttpClient) {}

    getArticle(slug: string): Observable<ArticleInterface> {
        const fullUrl = `${environment.apiUrl}/articles/${slug}`;
        return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
            map((response: GetArticleResponseInterface) => {
                return response.article;
            })
        );
    }
}
