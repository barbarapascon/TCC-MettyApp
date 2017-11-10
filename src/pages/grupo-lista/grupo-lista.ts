import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import { GroupProvider } from '../../providers/group/group';
import { NewgroupPage } from "../newgroup/newgroup";
import { GroupchatPage } from "../groupchat/groupchat";
/**
 * Generated class for the GroupsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-grupo-lista',
  templateUrl: 'grupo-lista.html',
})
export class GrupoListaPage {
  allmygroups;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,
              public loadingCtrl: LoadingController, public groupservice: GroupProvider) {
 }

  ionViewWillEnter() {
    let loader = this.loadingCtrl.create({
      content: 'Getting your groups, Please wait...'
    });
    loader.present();
    this.groupservice.getmygroups();
    loader.dismiss();
    this.events.subscribe('newgroup', () => {
      this.allmygroups = this.groupservice.mygroups;
    })
  }

  ionViewDidLeave() {
    this.events.unsubscribe('newgroup');
  }

  addgroup() {
    this.navCtrl.push(NewgroupPage);
  }

  openchat(group) {
    this.groupservice.getintogroup(group.groupName);
    this.navCtrl.push(GroupchatPage, { groupName: group.groupName });

  }

}

