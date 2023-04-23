import { Injectable } from '@angular/core';
import { initializeApp } from '@firebase/app';
import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
} from 'firebase/firestore/lite';

import { map, Observable } from 'rxjs';
import { Enterprise } from 'src/app/_shared/models/Enterprise';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnterpriseService {
  
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  // enterprises: Enterprise[] = [];
  role: string = '';
  enterprise: Enterprise = {
    name: '',
  };

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
}
