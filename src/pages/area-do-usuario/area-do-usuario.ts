import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';



 ({ templateUrl: "pages/area-do-usuario/area-do-usuario.html"})

/**
 * Generated class for the AreaDoUsuarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-area-do-usuario',
  templateUrl: 'area-do-usuario.html',
})
export class AreaDoUsuarioPage {

  constructor(public navCtrl: NavController) {
  } 

  

 irParaHomePage(){
            this.navCtrl.push(HomePage);

      }


  }

