import { Component, computed, ElementRef, EventEmitter, inject, Inject, OnInit, Output, output, viewChild, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecoveryData } from '../servicies/recovery-data';
import { timeout } from 'rxjs';
import { CommonModule, JsonPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { App } from '../app';
import { Mioservizio } from '../mioservizio';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, JsonPipe,],
  template: `
    <form [formGroup]="loginform" (ngSubmit)="onSubmit()">
      <p>username:</p>
      <input type="name" value="" formControlName="username" />
      <p>password:</p>
      <input type="password" value="" formControlName="password" />
      <button [disabled]="!loginform.valid">Login</button>
    </form>

    <pre>
      {{ userData() | json }}
    </pre
    >
    <button (click)="cambia()" >Back Home</button>
  `,
})
export class Login implements OnInit {
  loginform: FormGroup = new FormGroup({});
  username: string | undefined;
  password: any;
  // @ViewChild(App)statBool!:App
  userData = computed(() => {
    const userdata = this.recoveryData.userData();
    return userdata;
  });
  recoveryData = inject(RecoveryData);
  constructor(private mioServizio:Mioservizio,
    private router:Router
  ){}

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

    this.recoveryData.deleteUser('0ab6');
    console.log(this.mioServizio.showAll, "stampa del servizio")
  }

  onSubmit(): void {
    console.log(this.loginform);
    console.log(this.username, this.password);
  }

cambia(){
  this.mioServizio.showAll=true
  console.log(this.mioServizio.showAll, "stampa dal back ")
  this.router.navigate(['/'])
}


}
