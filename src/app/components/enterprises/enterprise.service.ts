import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  doc,
  Firestore,
  getDocs,
  getFirestore,
  setDoc,
} from '@angular/fire/firestore';
import { initializeApp } from '@firebase/app';
import { deleteDoc } from 'firebase/firestore';

import { DocumentData } from 'firebase/firestore/lite';
import { map, Observable } from 'rxjs';
import { Enterprise } from 'src/app/_shared/models/Enterprise';
import { environment } from 'src/environments/environment';

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
    const enterprises = collection(this.db, 'enterprises');

    return new Observable<DocumentData[]>((subscriber) => {
      getDocs(enterprises)
        .then((enterprisesSnapshot) => {
          const enterprisesList = enterprisesSnapshot.docs.map((doc) =>
            doc.data()
          );
          subscriber.next(enterprisesList);
          subscriber.complete();
        })
        .catch((error) => {
          subscriber.error(error);
        });
    }).pipe(map((enterprisesList) => enterprisesList as Enterprise[]));
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
