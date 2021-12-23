import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CurrentUserInterface } from './../../shared/models/current-user.interface';
import { RegisterRequestInterface } from './../models/register-request.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthResponseInterface } from '../models/auth-response.interface';
import { LoginRequestInterface } from '../models/login-request.interface';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    getUser(response: AuthResponseInterface): CurrentUserInterface {
        return response.user;
    }

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users';
        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(map(this.getUser));
    }
    login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users/login';
        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(map(this.getUser));
    }
}
