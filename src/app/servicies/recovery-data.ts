import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/accesso';

@Injectable({
  providedIn: 'root'
})
export class RecoveryData {
// private http = inject(HttpClient)
private baseUrl = "http://localhost:3000/login/"
userLogin: UserLogin = {} as UserLogin
userData= signal<UserLogin[]>({} as UserLogin[])

constructor(private http:HttpClient){
}

insertLoginData():Observable<UserLogin>{
return this.http.post<UserLogin>(this.baseUrl, {username:"ciccio", password:"12345"})
}

 updateUserData(){
this.http.put<UserLogin>(this.baseUrl, {username:"ciccia", password:"67890"}).subscribe(
 dataResponce => this.userLogin=dataResponce)
}

getUserData(){
this.http.get<UserLogin[]>(this.baseUrl).subscribe(
 dataResponce => this.userData.set(dataResponce))
}

deleteUser(url: string){

  this.http.delete<UserLogin>(this.baseUrl + url).subscribe(
 dataResponce => console.log(dataResponce))
}

}
