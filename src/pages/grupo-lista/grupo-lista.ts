import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GrupoDetalhePage } from '../grupo-detalhe/grupo-detalhe';

/**
 * Generated class for the GrupoListaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-grupo-lista',
  templateUrl: 'grupo-lista.html',
})
export class GrupoListaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrupoListaPage');
  }


    irParaGrupoDetalhePage(){
      this.navCtrl.push(GrupoDetalhePage);
    }
}
