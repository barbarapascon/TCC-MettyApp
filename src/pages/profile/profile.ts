import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Profile } from "../../models/profile";
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from "../home/home";
//import { Camera, CameraOptions } from "@ionic-native/camera";
import { storage } from "firebase/app";
import firebase from 'firebase';
import { TabsPage } from "../tabs/tabs";


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile = {} as Profile;
  //variaveis video do canal tending codes-hasnen
  picdata: any;
  picurl: any;
  mypicref: any;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
    //codes hasnem
    this.mypicref = firebase.storage().ref('/');
    this.picurl= '../../assets/PROFILESEMFOTO.png';
  }
  //função takepicuture code hasnem
 
  createProfile() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
        .then(() => this.navCtrl.setRoot(TabsPage));
    })
  }

}
