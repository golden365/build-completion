import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.scss']
})
export class RegisterServiceComponent implements OnInit {

  darkForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.darkForm = fb.group({
      darkFormEmailEx: ['', [Validators.required, Validators.email]],
      darkFormCreatePasswordEx: ['', Validators.required],
      darkFormConfirmPasswordEx: ['', Validators.required],
      darkFormEnterCaptchaEx: ['', Validators.required],
    });
  }
  ngOnInit() {
  }

}
