import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnewuser',
  templateUrl: './addnewuser.component.html',
  styleUrls: ['./addnewuser.component.scss']
})
export class AddnewuserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  alert(event) {
    alert('Are you sure Create?');
    console.log(event);
  }
}
