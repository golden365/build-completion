import { Component, OnInit } from '@angular/core';
import {Table} from '../users/Table';
import {TableService} from '../users/table.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
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
}
