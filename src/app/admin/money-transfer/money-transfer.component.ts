import { Component, OnInit } from '@angular/core';
import {Table} from '../users/Table';
import {TableService} from '../users/table.service';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent implements OnInit {
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
