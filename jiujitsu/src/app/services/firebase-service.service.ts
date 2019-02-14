import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebaseConfig);
    }
  }
  // Retornar a referencia do banco
  getRef(path: string) {
    return firebase.database().ref(path);
  }

  addItem(item: any, path: string) {
    return this.getRef(path).push(item);
  }
  deleteItem(key: string, path: string) {
    return this.getRef(path).child(key).remove();
}

editItem(key: string, item: any, path: string) {
    return this.getRef(path).child(key).update(item);
}



}
