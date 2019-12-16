import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TableService {

    url = 'https://ondemand.work-progress.info';

    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get(`${this.url}/getUsers`);
    }

    deleteData(ids: string) {
        return this.http.get(`${this.url}/deleteUser?id=${ids}`);
    }

    createData(newData: any) {
        return this.http.post(`${this.url}/createUser`, null, {params: newData});
    }

    editUser(newData: any) {
        return this.http.post(`${this.url}/editUser`, null, {params: newData});
    }
}
