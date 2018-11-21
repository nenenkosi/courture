import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database'
import { User } from '../../app/myprovider/user';
import { Profile } from '../../app/myprovider/profile';
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  profile = {} as Profile
  user = {} as User

  constructor(public alertCtrl: AlertController, private fireauth: AngularFireAuth, private afDatabase: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  alert(message:string){
    this.alertCtrl.create({
      title:'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  
  reg(user:User){
    if (user.email  !=undefined  && this.user.password !=undefined){
    this.fireauth.auth.createUserWithEmailAndPassword(user.email,user.password)
    .then(()=>{this.fireauth.authState.subscribe( data => {
   this.afDatabase.object('users/'+ data.uid+'/'+'profile').set(this.profile)
       .then(() => this.navCtrl.push(LoginPage));
 })
} , (error) =>{
  this.alert(error.message)
})
}else{this.alert('Please fill in all the fields ')}
}
back(){
  this.navCtrl.push(LoginPage)
}
}



