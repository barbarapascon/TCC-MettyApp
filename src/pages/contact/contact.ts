import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GrupoListaPage } from '../grupo-lista/grupo-lista';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  irParaGrupoListaPage(){
    this.navCtrl.push(GrupoListaPage);
  }

}
