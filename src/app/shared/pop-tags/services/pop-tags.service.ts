import { environment } from './../../../../environments/environment';
import { PopularTagType } from './../../models/popular-tag.type';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PopularTagsResponseInterface } from '../models/get-popular-tags-response.interface';

@Injectable()
export class PopularTagsService {
    constructor(private http: HttpClient) {}

    getPopularTags(): Observable<PopularTagType[]> {
        const url = environment.apiUrl + '/tags';
        return this.http.get(url).pipe(
            map((response: PopularTagsResponseInterface) => {
                return response.tags;
            })
        );
    }
}
