import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CurrentUserInterface } from './../../shared/models/current-user.interface';
import { RegisterRequestInterface } from './../models/register-request.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthResponseInterface } from '../models/auth-response.interface';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}
    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users';
        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(map((response: AuthResponseInterface) => response.user));
    }
}
