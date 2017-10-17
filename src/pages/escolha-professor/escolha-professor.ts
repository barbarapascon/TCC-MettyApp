import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProfessoresPage} from '../professores/professores'

/**
 * Generated class for the EscolhaProfessorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-escolha-professor',
  templateUrl: 'escolha-professor.html',
})
export class EscolhaProfessorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscolhaProfessorPage');
  }

  irParaProfessores(){
    this.navCtrl.push(ProfessoresPage);

}

}
