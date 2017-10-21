import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth'
//import { ProfilePage } from "../profile/profile";
import { HomePage } from "../home/home";
import { ProfilePage } from "../profile/profile";
import { RegisterPage } from "../register/register";
import { AlertController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public alertCtrl: AlertController,private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {

  }
    showAlert(erro) {
    let alert = this.alertCtrl.create({
      title: 'Erro!',
      subTitle: erro,
      buttons: ['OK']
    });
    alert.present();
  }

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(result => {
        if(result){
          console.log(result);
          this.navCtrl.setRoot(TabsPage);
        }
      }).catch(error => {
        this.showAlert(error.message);
        console.log(error.name)
      });
      
    }
    catch(e){
      console.error(e);
       this.showAlert(e.message);
    }
  }
  Register() {
    this.navCtrl.push(RegisterPage);
  }
 




}
