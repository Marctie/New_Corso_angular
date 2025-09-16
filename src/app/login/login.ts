import { Component, computed, ElementRef, inject, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecoveryData } from '../servicies/recovery-data';
import { timeout } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, JsonPipe, RouterLink],
  template: `
    <form [formGroup]="loginform" (ngSubmit)="onSubmit()">
      <p>username:</p>
      <input type="name" value="" formControlName="username" />
      <p>password:</p>
      <input type="password" value="" formControlName="password" />
      <button [disabled]="!loginform.valid">Login</button>
    </form>

    <pre>
      {{userData()|json}}
    </pre>
    
    <button routerLink="/" #comeBack>Back Home</button>
  `,
})
export class Login implements OnInit {
  loginform: FormGroup = new FormGroup({});
  username: string | undefined;
  password: any;
  userData= computed(()=>{
    const userdata=this.recoveryData.userData();
    return userdata
  })
recoveryData= inject(RecoveryData)

  ngOnInit(): void {
    this.loginform = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  // this.recoveryData.insertLoginData().subscribe(
  //   dataResponce => console.log(dataResponce)
  // )

//   this.recoveryData.updateUserData()
// console.log(this.recoveryData.userLogin)

// this.recoveryData.getUserData();
// console.log(this.userData)

this.recoveryData.deleteUser("0ab6");
  }

  onSubmit(): void {
    console.log(this.loginform);
    console.log(this.username,this.password)
  }

    @ViewChild('comeBack')
  comeBack!: ElementRef;
  val = false;
}


