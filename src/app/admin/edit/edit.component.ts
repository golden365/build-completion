import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  alert(event) {
    alert('Are you sure remove?');
    console.log(event);
  }
}
