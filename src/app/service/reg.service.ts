import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/Observable/of';

import { Registration } from '../main/models/reg.model';

@Injectable()
export class RegistrationService {
    
    private base_url = `http://localhost:1234/api`;

    constructor(private http : Http){}

    GetRegistrations():Observable<Registration[]>{
        const url = `${this.base_url}/Registrations`;
        return this.http.get(url)
        .map(this.extractData);
    }

    insertRegistration(data : Registration): Observable<Registration>{
        const url = `${this.base_url}/registrations`;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url,data,options)
        .map(this.extractData);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body;
    }
    
}