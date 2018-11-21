import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "angularfire2/auth";
import { map } from 'rxjs/operators';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(public navCtrl: NavController, private afDatabase: AngularFireDatabase, private fireauth: AngularFireAuth,public alertCtrl: AlertController) {
 
  this.fireauth.authState.subscribe( auth => {
    this.itemsRef= this.afDatabase.list('users/'+ auth.uid +'/'+'booking');
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  , (error) =>{
    console.log(error);
    alert(error)
  }
)

  }
  

  deleteItem=function(key) { 
    const confirm = this.alertCtrl.create({
      title: 'Delete booking',
      message: 'Do you agree to detele this booking?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.itemsRef.remove(key);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }   
 
}
