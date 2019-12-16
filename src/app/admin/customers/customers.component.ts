import { Component, OnInit } from '@angular/core';
import {Validators} from '@angular/forms';
import {Table} from '../users/Table';
import {TableService} from '../users/table.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  private selectedRows: any;
  settings = {
    selectMode: 'multi',
    delete: {
      confirmDelete: true,

      deleteButtonContent: 'Delete data',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    add: {
      confirmCreate: true,
      id: ['', Validators.required],
      name: ['', Validators.required],
      city: ['', Validators.required],
      employees: ['', Validators.required]
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      city: {
        title: 'City'
      },
      employees: {
        title: 'Employee No.'
      }
    }
  };
  employees: Table[];

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
    window.alert('Are you sure delete?');
    this.tservice.deleteData(event.data.id).subscribe((data: Table[]) => {
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
