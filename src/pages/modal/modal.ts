import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';
import { rent } from '../../app/myprovider/rent';
import *as moment from 'moment'
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
   now = moment().format('L');
  total:number;

  rent = {} as rent;

  obj = this.navParams.get('obj');

  arr:any []= this.navParams.get('jj');

  pic=this.arr[this.obj].pic;
  name=this.arr[this.obj].name;
  desctiption=this.arr[this.obj].desctiption;
  price=this.arr[this.obj].price;
  pic1=this.arr[this.obj].pic1;
  pic2=this.arr[this.obj].pic2;
  pic3=this.arr[this.obj].pic3;
  pic4=this.arr[this.obj].pic4;
  details=this.arr[this.obj].details;
pet;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fireauth: AngularFireAuth, private afDatabase: AngularFireDatabase) {
 this.rent.pic =  this.pic;
 this.rent.name = this.name;
 this.pet="Photos";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelPage');
    console.log(this.now)
  }
  book(rent:rent,now){
  
    this.rent.pants=500*this.rent.pants; 
    this.rent.shirt=450*this.rent.shirt;
    this.rent.blazer=800*this.rent.blazer;
  
  this.total= this.rent.pants+this.rent.shirt+this.rent.blazer;
  this.rent.total= this.rent.pants+this.rent.shirt+this.rent.blazer;
    this.fireauth.authState.take(1).subscribe( auth => {
      this.afDatabase.list('users/'+ auth.uid+'/'+'/'+'booking').push(this.rent)
          .then( );
    })
  

} 
 add() {
   this.rent.pants=500*this.rent.pants;
   this.rent.shirt=450*this.rent.shirt;
   this.rent.blazer=800*this.rent.blazer;
   this.total=0
 this.total= this.rent.pants+this.rent.shirt+this.rent.blazer;
 console.log(this.total)
}
back(){
  this.navCtrl.pop()
}
}
