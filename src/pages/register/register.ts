import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth'
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;

  constructor(public alertCtrl: AlertController,private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }
     goback() {
    this.navCtrl.setRoot(LoginPage);
  }
 showAlert(error) {
    let alert = this.alertCtrl.create({
      title: 'Ocorreu um erro!',
      subTitle: error,
      buttons: ['OK']
    });
    alert.present();
  }
   showAlertok() {
    let alert = this.alertCtrl.create({
      title: 'registradoo!',
      subTitle: 'Registrado com sucesso',
      buttons: ['OK']
    });
    alert.present();
  }

  async register(user: User) {// procurar oq é uma async function
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(result => {
       
          console.log(result);
          this.showAlertok();
          this.navCtrl.setRoot(HomePage);
        
      }).catch(error => {
        this.showAlert(error.message);
        console.log(error.name);
      });
      console.log(result);
    }
    catch(e){
    console.error(e);
        this.showAlert(e.message);
    }
  }


}

