import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  darkForm: FormGroup;
  constructor(public fb: FormBuilder, public dialog: MatDialog) {
    this.darkForm = fb.group({
      darkFormEmailEx: ['', [Validators.required, Validators.email]],
      darkFormCreatePasswordEx: ['', Validators.required],
      darkFormConfirmPasswordEx: ['', Validators.required],
      darkFormEnterCaptchaEx: ['', Validators.required],
    });
  }
  openDialog() {
    this.dialog.open(Dialog, {
      data: {
        animal: 'panda'
      }
    });
  }
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog',
  templateUrl: 'dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class Dialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
