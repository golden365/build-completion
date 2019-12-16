import { Component, OnInit } from '@angular/core';
import {Table} from '../users/Table';
import {TableService} from '../users/table.service';

@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.component.html',
  styleUrls: ['./administrators.component.scss']
})
export class AdministratorsComponent implements OnInit {
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
