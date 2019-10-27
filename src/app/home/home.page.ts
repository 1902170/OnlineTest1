import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AboutPage } from '../about/about.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

/* You have to define your input as a string. */

export class HomePage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController) {}

/* With console.log you can check with the browser what is typed in.
navigateFormward is to go to the page "about". This is the new "start page". */

login() {
  console.log(this.username);
  console.log(this.password);

  this.navCtrl.navigateForward('about');
}
}
