import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the StateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StateProvider {
  condition: number;

  constructor(public http: HttpClient,private fireauth: AngularFireAuth) {
    console.log('Hello StateProvider Provider');
  }
  checkstate(){
    return new Promise((resolve, reject)=>{
    this.fireauth.auth.onAuthStateChanged((user)=>
     {
      if (user != null) {
       // alert('user signed in')
       this.condition = 1
      } else {
        this.condition = 0
       // alert('no user signed in')
      }
      resolve(this.condition)
    })
    reject(Error)
  })
}

}
