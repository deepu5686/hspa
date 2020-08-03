import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  userSubmitted: boolean;
  user: User;
  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private alertifyService: AlertifyService
    ) { }

  ngOnInit(): void {
    // this.registrationForm = new FormGroup({
    //   username: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, this.confrimPasswordMatch);

    this.createRegistrationFrom();
  }

  createRegistrationFrom() {
    this.registrationForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators .required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    },{validators: this.confrimPasswordMatch})
  }

  confrimPasswordMatch(fg: FormGroup) {
    return fg.get('confirmPassword').value === fg.get('password').value ? null:
    {notMatched: true};
  }

  //getter method for formcontrol

  get username() {
    return this.registrationForm.get('username') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
  return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.userSubmitted = true;

    if(this.registrationForm.valid) {
    this.userService.addUser(this.userData());
    this.registrationForm.reset();
    this.userSubmitted = false;
    this.alertifyService.sucess('Congrats, you are successfylly registered')
  } else {
    this.alertifyService.error('Provide the required fields');
  }
  }

  userData(): User {
    return this.user = {
      userName: this.username.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }
}
