import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { User } from '../../app/myprovider/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from '../register/register';
import { StartPage } from '../start/start';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private fireauth: AngularFireAuth) {
  }
  alert(message:string){
    this.alertCtrl.create({
      title:'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(user:User){


    if (user.email  !=undefined  && this.user.password !=undefined){


      this.fireauth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(()=>{
  
        this.alert('Success! You\'re logged in ');
        this.navCtrl.setRoot(StartPage);
      } , error =>{
  
        this.alert(error.message)
      } )
     
    }else {this.alert('Please fill in all the fields ')}
   
 
  }
forgotpassword(){
  if (this.user.email  !=undefined){
  this.fireauth.auth.sendPasswordResetEmail(this.user.email)
  .then(()=>{
    this.alert('Please Enter Email')} ,
   error =>{
    this.alert(error.message)
  })
}else {this.alert('Please fill in the Email fields ')}
}
 reg=function (){
    this.navCtrl.push(RegisterPage);  
  }
}
