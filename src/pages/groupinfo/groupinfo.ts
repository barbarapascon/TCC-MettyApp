import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { GroupProvider } from '../../providers/group/group';

/**
 * Generated class for the GroupinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-groupinfo',
  templateUrl: 'groupinfo.html',
  
})
export class GroupinfoPage {
  groupmembers;
   groupName;
  constructor(public navCtrl: NavController, public navParams: NavParams, public groupservice: GroupProvider,
              public events: Events) {
                 this.groupName = this.navParams.get('groupName');
  }

  ionViewDidLoad() {
    this.groupservice.getownership(this.groupservice.currentgroupname).then((res) => {
      if (res)
        this.groupmembers = this.groupservice.currentgroup;
      else {
        this.groupservice.getgroupmembers();
      }
        
    })

    this.events.subscribe('gotmembers', () => {
      this.groupmembers = this.groupservice.currentgroup;
    })
    
  }

  ionViewWillLeave() {
    this.events.unsubscribe('gotmembers');
  }


}
