import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

import { TabsPage } from '../pages/tabs/tabs';
import { StartPage } from '../pages/start/start';
import { StateProvider } from '../providers/state/state';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private state:StateProvider ) {

    this.state.checkstate().then((data:any)=>{

      if (data ==1){
        this.rootPage = TabsPage;
     
      }
      else {
        this.rootPage = LoginPage;
      }
     })

     console.log(state);
     
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
