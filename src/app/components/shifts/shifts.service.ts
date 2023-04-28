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
import { Shift } from 'src/app/_shared/models/Shift';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  role: string = '';
  shift: Shift = {
    id: '',
    shiftName: '',
    period: '',
    idEnterprise: '',
    linkShift: ''
  };

  constructor(private firestore: Firestore) {}

  list(): Observable<Shift[]> {
    let $shifts = collection(this.db, 'shifts');
    return collectionData($shifts, {idField: "id"}) as Observable<Shift[]>;
  }

  getShift(id: string){
    let $shifts = doc(this.firestore, 'shifts/' + id);
    return docData($shifts) as Observable<Shift>;
  }

  delete(id: string) {
    let $shiftRef = doc(this.firestore, 'shifts/' + id);
    return deleteDoc($shiftRef);
  }

  addShift(shift: Shift) {
    let $shiftRef = collection(this.firestore, 'shifts');
    return addDoc($shiftRef, shift);
  }

  update(shift: Shift, id: string) {
    let $shiftRef = doc(this.firestore, 'shifts/' + id);
    return setDoc($shiftRef, shift);
  }
}

