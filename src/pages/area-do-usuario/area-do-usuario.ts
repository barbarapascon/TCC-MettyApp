import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, Events, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { ProfilePage } from "../profile/profile";
import { Profile } from "../../models/profile";
import { ImghandlerProvider } from "../../providers/imghandler/imghandler";
import { UserProvider } from "../../providers/user/user";
import firebase from 'firebase';
import { LoginPage } from "../login/login";
import { GroupProvider } from "../../providers/group/group";
import { GroupchatPage } from "../groupchat/groupchat";
import { NewgroupPage } from "../newgroup/newgroup";
import { TagsProvider } from "../../providers/tags/tags";


({ templateUrl: "pages/area-do-usuario/area-do-usuario.html" })


@Component({
  selector: 'page-area-do-usuario',
  templateUrl: 'area-do-usuario.html',
})
export class AreaDoUsuarioPage {
  newtag = {
    tagName: 'TagName'
  }
  profileData: FirebaseObjectObservable<Profile>
  avatar: string;
  displayName: string;
  allmygroups;
  allmytags;
  constructor(private afAuth: AngularFireAuth, private toast: ToastController, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams, public userservice: UserProvider, public zone: NgZone, public alertCtrl: AlertController,
    public imghandler: ImghandlerProvider, public groupservice: GroupProvider, public events: Events,
    public loadingCtrl: LoadingController, public tagsservice: TagsProvider) {
  }

  ionViewWillEnter() {
    this.loaduserdetails();
    this.carregaGrupos();
    //carregar grupos do usuario
    //carregar tags
    this.carregaTags();


  }
  carregaTags() {
    this.tagsservice.getmyTags();
    this.events.subscribe('newtag', () => {
      this.allmytags = this.tagsservice.mytags;
    })
  }
  carregaGrupos() {
    this.groupservice.getmygroups();

    this.events.subscribe('newgroup', () => {
      this.allmygroups = this.groupservice.mygroups;

    })
  }
  loaduserdetails() {
    this.userservice.getuserdetails().then((res: any) => {
      this.displayName = res.displayName;
      this.zone.run(() => {
        this.avatar = res.photoURL;
      })
    })
  }
  editimage() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    this.imghandler.uploadimage().then((url: any) => {
      this.userservice.updateimage(url).then((res: any) => {
        if (res.success) {
          statusalert.setTitle('Updated');
          statusalert.setSubTitle('Your profile pic has been changed successfully!!');
          statusalert.present();
          this.zone.run(() => {
            this.avatar = url;
          })
        }
      }).catch((err) => {
        statusalert.setTitle('Failed');
        statusalert.setSubTitle('Your profile pic was not changed');
        statusalert.present();
      })
    })
  }

  editname() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    let alert = this.alertCtrl.create({
      title: 'Edit Nickname',
      inputs: [{
        name: 'nickname',
        placeholder: 'Nickname'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {

        }
      },
      {
        text: 'Edit',
        handler: data => {
          if (data.nickname) {
            this.userservice.updatedisplayname(data.nickname).then((res: any) => {
              if (res.success) {
                statusalert.setTitle('Updated');
                statusalert.setSubTitle('Your nickname has been changed successfully!!');
                statusalert.present();
                this.zone.run(() => {
                  this.displayName = data.nickname;
                })
              }

              else {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your nickname was not changed');
                statusalert.present();
              }

            })
          }
        }

      }]
    });
    alert.present();
  }


  logout() {
    firebase.auth().signOut().then(() => {
      this.navCtrl.parent.parent.setRoot(LoginPage);
    })
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {

        this.toast.create({
          message: `wlcome to APP_NAME, ${data.email}`,
          duration: 3000
        }).present();
        this.profileData = this.afDatabase.object(`profile/${data.uid}`)
        this.profileData.subscribe(data => {
          if (!data.firstName) {
            this.navCtrl.setRoot(ProfilePage);
          }
        },
          error => {
            console.log("Error", error);
          });
      }
      else {
        this.toast.create({
          message: `nao foi possivel achar dados`,
          duration: 3000
        }).present();

      }
    });

  }

  irParaHomePage() {
    this.navCtrl.push(HomePage);

  }

  openchat(group) {
    this.groupservice.getintogroup(group.groupName);
    this.navCtrl.push(GroupchatPage, { groupName: group.groupName });

  }
  addgroup() {
    this.navCtrl.push(NewgroupPage);
  }

  addTag() {
    //cria uma pagina alerta para criação de tags

    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    let alert = this.alertCtrl.create({
      title: 'Digite uma tag',
      inputs: [{
        name: 'tagName',
        placeholder: 'Tagname'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: data => {

        }
      },
      {
        text: 'Adicionar',
        handler: data => {
          if (data.tagName) {
            this.newtag.tagName = data.tagName;
            this.tagsservice.addtag(this.newtag).then((res: any) => {
              //this.navCtrl.pop();
            }).catch((err) => {
              console.log(err);
            })
          }
        }

      }]
    });
    alert.present();
  }
}

