import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
export interface User {
  name: string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor() { }
  disableSelect = new FormControl(false);
  public map: any = { lat: 51.678418, lng: 7.809007 };

  optionsSelect: Array<any>;
  disabled = true;
  disOptionsSelect: Array<any>;

  longitude = 20.728218;
  latitude = 52.128973;

  markers = [
    { latitude: 52.228973, longitude: 20.728218 }
  ];
  myControl = new FormControl();
  options: User[] = [
    {name: 'London'},
    {name: 'New York'},
    {name: 'Amsterdam'},
    {name: 'Tokyo'},
    {name: 'Berlin'},
    {name: 'Bern'},
  ];
  filteredOptions: Observable<User[]>;
  placeMarker(position: any) {
    const lat = position.coords.lat;
    const lng = position.coords.lng;

    this.markers.push({ latitude: lat, longitude: lng });
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
        .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filter(name) : this.options.slice())
        );
    this.disOptionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' } ,
      { value: '3', label: 'Disabled option', disabled: true } ,
    ];
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
