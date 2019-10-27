import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
selector: 'app-root',
templateUrl: 'app.component.html'
})
export class AppComponent {
 // Adding code here

public appPage = [
{
title: 'About',
url: '/about',
icon: 'contact'
},
{
title: 'Contact',
url: '/contact',
icon: 'call'
},

/* I want to go to the tabs page but it doesn't work*/
{
  title: 'CV',
  url: '/cv',
  icon: 'document'
  }
];

 // until here
constructor(
private platform: Platform,
private splashScreen: SplashScreen,
private statusBar: StatusBar
) {
this.initializeApp();
}
initializeApp() {
this.platform.ready().then(() => {
this.statusBar.styleDefault();
this.splashScreen.hide();
});
}
}
