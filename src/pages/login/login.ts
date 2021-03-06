import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { usercreds } from '../../models/usercreds';

import { AuthProvider } from '../../providers/auth/auth';
import { RegisterPage } from "../register/register";
import { TabsPage } from "../tabs/tabs";
import { PasswordresetPage } from "../passwordreset/passwordreset";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {} as usercreds;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin() {
    this.authservice.login(this.credentials).then((res: any) => {
      if (!res.code)
        this.navCtrl.setRoot(TabsPage);
      else
        alert(res);
    })
  }

  signup() {
    this.navCtrl.push(RegisterPage);
  }

  passwordreset() {
    this.navCtrl.push(PasswordresetPage);
  }

}

