import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
selector: 'app-root',
templateUrl: 'app.component.html'
})
export class AppComponent {

 // Here are all pages added which are shown in the side menu.

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

/* The URL is not cv this time because I want to go directly to the tabs
page to have all my tabs there. */
{
  title: 'CV',
  url: '/tabs',
  icon: 'document'
  }
];

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
