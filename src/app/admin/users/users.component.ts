import {Component, OnInit} from '@angular/core';
import {Table} from './Table';
import {TableService} from './table.service';
import {Observable} from 'rxjs';
import {Validators} from '@angular/forms';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    private selectedRows: any;
    // settings = {
    //     //     selectMode: 'multi',
    //     //     delete: {
    //     //         confirmDelete: true,
    //     //
    //     //         deleteButtonContent: 'Delete data',
    //     //         saveButtonContent: 'save',
    //     //         cancelButtonContent: 'cancel'
    //     //     },
    //     //     add: {
    //     //         confirmCreate: true,
    //     //         userId: ['', Validators.required],
    //     //         name: ['', Validators.required],
    //     //         city: ['', Validators.required],
    //     //         employees: ['', Validators.required]
    //     //     },
    //     //     edit: {
    //     //         confirmSave: true,
    //     //     },
    //     //     columns: {
    //     //         userId: {
    //     //             title: 'ID'
    //     //         },
    //     //         name: {
    //     //             title: 'Name'
    //     //         },
    //     //         city: {
    //     //             title: 'City'
    //     //         },
    //     //         employees: {
    //     //             title: 'Employee No.'
    //     //         }
    //     //     }
    //     // };
    employees: Table[];
    selectedTable: Table = {id: null};

    constructor(private tservice: TableService) {
    }

    ngOnInit() {
        this.getAllUsers();
    }

    getAllUsers() {
        this.tservice.getData().subscribe((data: Table[]) => {
            this.employees = data;
            console.log(this.employees);
        });
    }

    deleteUser(event) {
        this.tservice.deleteData(event.data.userId).subscribe((data: Table[]) => {
            this.getAllUsers();
        });
    }

    createUser(event) {
        this.tservice.createData(event.newData).subscribe((data: Table[]) => {
            this.getAllUsers();
        });
    }

    editUser(event) {
        this.tservice.editUser(event.newData).subscribe((data: Table[]) => {
            this.getAllUsers();
        });
    }
}

