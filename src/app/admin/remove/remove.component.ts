import { Component, OnInit } from '@angular/core';
import {Table} from './Table';
import {TableService} from './table.service';
@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss']
})
export class RemoveComponent implements OnInit {

  constructor(private tservice: TableService) { }
  ngOnInit() {
  }
  deleteUser(event) {
    this.tservice.deleteData(event.data.userId).subscribe((data: Table[]) => {
    });
  }

}
