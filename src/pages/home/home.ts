import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  arr= [new Hotel("../../assets/imgs/suit1.jpg", "Jidenna","Slim-fit suit in micro-pattern virgin wool serge","R3500","../../assets/imgs/suit1a.jpg","../../assets/imgs/suit1b.jpg","../../assets/imgs/suit1c.jpg","../../assets/imgs/suit1d.jpg","Slim fit Notch lapels Fastening top Button closure Number of buttons: 2Welt chest pockets,Pockets top: Flap pockets Inside jet pockets Kissing buttons on the cuff Side vent"),
      new Hotel("../../assets/imgs/suit2.jpg", "African","Extra-slim-fit virgin-wool suit with jacquard-woven artwork","R2500","../../assets/imgs/suit2a.jpg","../../assets/imgs/suit2b.jpg","../../assets/imgs/suit2c.jpg","../../assets/imgs/suit2d.jpg","Slim fit ,Peak lapels,Fastening top: Button closure,Number of buttons: Double-breasted,Welt chest pockets,Pockets top: Jet pockets,Inside jet pockets,Kissing buttons on the cuff,Side vent,Fully lined"),
      new Hotel("../../assets/imgs/suit3.jpg", "Modern","Extra-slim-fit virgin-wool suit with natural stretch","R2800","../../assets/imgs/suit3a.jpg","../../assets/imgs/suit3b.jpg","../../assets/imgs/suit3c.jpg","../../assets/imgs/suit3d.jpg","Extra-slim fit, Notch lapels,Number of buttons: 2,Welt chest pockets,Pockets top: Flap pockets,Inside jet pockets,Button cuffs,Side vent,Fully lined"),
      new Hotel("../../assets/imgs/suit4.jpg", "Vintage","Double-breasted pinstripe suit in stretch virgin wool","R2000","../../assets/imgs/suit4a.jpg","../../assets/imgs/suit4b.jpg","../../assets/imgs/suit4c.jpg","../../assets/imgs/suit4d.jpg","Slim fit ,Peak lapels,Fastening top: Button closure,Number of buttons: Double-breasted,Welt chest pockets,Pockets top: Jet pockets,Inside jet pockets,Kissing buttons on the cuff,Side vent,Fully lined"),
      new Hotel("../../assets/imgs/suit5.jpg", "Dandy","Regular-fit pinstripe suit in Italian virgin wool","R1800","../../assets/imgs/suit5a.jpg","../../assets/imgs/suit5b.jpg","../../assets/imgs/suit5c.jpg","../../assets/imgs/suit5d.jpg","Slim fit Notch lapels Fastening top Button closure Number of buttons: 2Welt chest pockets,Pockets top: Flap pockets Inside jet pockets Kissing buttons on the cuff Side vent"),
]


  constructor(public navCtrl: NavController,public modalCtrl: ModalController, private fireauth: AngularFireAuth) {

  }
  presentModal=function(a) {
    const modal = this.modalCtrl.create(ModalPage, {obj:a , jj:this.arr});
    modal.present();
  }
//   logout(user){
//     this.fireauth.auth.onAuthStateChanged(user){
//       if(user){
//     }
//     else{
//       console.log('done')
//     }
// }
// }
}

  export class Hotel{
    pic;
    name;
    desctiption;
    price;
    pic1;
    pic2;
    pic3;
    pic4; 
    details;
    constructor(pic,name,desctiption,price, pic1,pic2,pic3,pic4,details) {
      this.pic=pic
      this.name=name;
      this.desctiption=desctiption;
      this.price=price;
      this.pic1=pic1;
      this.pic2=pic2;
      this.pic3=pic3;
      this.pic4=pic4;
      this.details=details;
      
    }
}


