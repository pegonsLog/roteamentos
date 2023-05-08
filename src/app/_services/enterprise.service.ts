import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  Firestore,
  getFirestore,
  setDoc
} from '@angular/fire/firestore';
import { initializeApp } from '@firebase/app';
import { deleteDoc } from 'firebase/firestore';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enterprise } from '../_models/Enterprise';

@Injectable({
  providedIn: 'root',
})
export class EnterpriseService {
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  role: string = '';
  enterprise: Enterprise = {
    id: '',
    name: '',
  };

  constructor(private firestore: Firestore) {}

  list(): Observable<Enterprise[]> {
    let $enterprises = collection(this.db, 'enterprises');
    return collectionData($enterprises, {idField: "id"}) as Observable<Enterprise[]>;
  }

  getEnterprise(id: string){
    let $enterprises = doc(this.firestore, 'enterprises/' + id);
    return docData($enterprises) as Observable<Enterprise>;
  }

  delete(id: string) {
    let $enterpriseRef = doc(this.firestore, 'enterprises/' + id);
    return deleteDoc($enterpriseRef);
  }

  addEnterprise(enterprise: Enterprise) {
    let $enterpriseRef = collection(this.firestore, 'enterprises');
    return addDoc($enterpriseRef, enterprise);
  }

  update(enterprise: Enterprise, id: string) {
    let $enterpriseRef = doc(this.firestore, 'enterprises/' + id);
    return setDoc($enterpriseRef, enterprise);
  }
}
