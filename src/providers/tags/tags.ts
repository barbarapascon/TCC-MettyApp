import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import firebase from 'firebase';
import 'rxjs/add/operator/map';
import { Events } from "ionic-angular";

/*
  Generated class for the TagsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TagsProvider {
firetag = firebase.database().ref('/tag');
 mytags: Array<any> = [];
  currenttag: Array<any> = [];
  currenttagname;
  constructor(public events: Events) {
  }
 addtag(newTag) {
    var promise = new Promise((resolve, reject) => {
      this.firetag.child(firebase.auth().currentUser.uid).child(newTag.tagName).set({
      owner: firebase.auth().currentUser.uid
      }).then(() => {
        resolve(true);
        }).catch((err) => {
          reject(err);
      })
    });
    return promise;
  }

  getmyTags() {
    this.firetag.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
      this.mytags = [];
      if(snapshot.val() != null) {
        var temp = snapshot.val();
        for (var key in temp) {
          var newtag = {
            tagName: key
          }
          this.mytags.push(newtag);
        }
      }
      this.events.publish('newtag');
    })
    
  }
}
