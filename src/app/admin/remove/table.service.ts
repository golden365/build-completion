import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TableService {

    url = 'https://ondemand.work-progress.info';

    constructor(private http: HttpClient) { }
    deleteData(ids: string) {
        return this.http.get(`${this.url}/api/v1/users/?userId=${ids}`);
    }
}
