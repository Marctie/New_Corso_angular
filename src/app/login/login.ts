import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="loginform" (ngSubmit)="onSubmit()">
      <p>username:</p>
      <input type="name" value="" formControlName="username" />
      <p>password:</p>
      <input type="password" value="" formControlName="password" />
      <button [disabled]="!loginform.valid">Login</button>
    </form>
  `,
})
export class Login implements OnInit {
  loginform: FormGroup = new FormGroup({});
  username: string | undefined;
  password: any;

  ngOnInit(): void {
    this.loginform = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    console.log(this.loginform);
  }
}
