import {Component, HostListener, ViewChild} from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  @ViewChild('sidenav', { static: true }) public el: any;

  @HostListener('swiperight', ['$event']) public swipePrev(event: any) {
    this.el.show();
  }
  constructor() { }
}
