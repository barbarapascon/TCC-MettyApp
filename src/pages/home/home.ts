import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AreaDoUsuarioPage } from '../area-do-usuario/area-do-usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
     
      irParaAreadoUsuario(){
            this.navCtrl.push(AreaDoUsuarioPage);

      }
      
    
}
