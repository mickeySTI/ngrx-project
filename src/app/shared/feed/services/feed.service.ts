import { GetFeedResponseInterface } from './../models/getFeedResponse.interface';
import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FeedService {
    constructor(private http: HttpClient) {}
    getFeed(url: string): Observable<GetFeedResponseInterface> {
        const fullUrl = environment.apiUrl + url;
        return this.http.get<GetFeedResponseInterface>(fullUrl);
    }
}
