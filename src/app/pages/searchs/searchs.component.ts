import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.scss']
})
export class SearchsComponent implements OnInit {
  searchText = new Subject();
  results: Observable<string[]>;
  data: any = [
    'red',
    'green',
    'blue',
    'cyan',
    'magenta',
    'yellow',
    'black',
  ];
  ngOnInit() {
    this.results = this.searchText.pipe(
        startWith(''),
        map((value: string) => this.filter(value))
    );
  }
  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.data.filter((item: string) => item.toLowerCase().includes(filterValue));
  }

}
