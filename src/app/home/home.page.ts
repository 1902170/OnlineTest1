import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AboutPage } from '../about/about.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController) {}



login() {
  console.log(this.username);
  console.log(this.password);

  this.navCtrl.navigateForward('about');
}

}
