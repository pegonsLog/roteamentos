import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  Firestore,
  getFirestore,
  setDoc,
} from '@angular/fire/firestore';
import { initializeApp } from '@firebase/app';
import { deleteDoc } from 'firebase/firestore';

import { Observable, Subscription } from 'rxjs';
import { Itinerary } from 'src/app/_shared/models/Itinerary';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ItinerariesService {
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);
  mySubscription: Subscription = new Subscription();

  role: string = '';
  itinerary: Itinerary = {
    id: '',
    name: '',
    direction: '',
    extension: 0,
    full: 0,
    partial: 0,
    linkItinerary: '',
    idShift: '',
  };

  constructor(private firestore: Firestore) {}

  list(): Observable<Itinerary[]> {
    let $itineraries = collection(this.db, 'itineraries');
    return collectionData($itineraries, { idField: 'id' }) as Observable<
      Itinerary[]
    >;
  }

  getItinerary(id: string) {
    let $itineraries = doc(this.firestore, 'itineraries/' + id);
    docData($itineraries).subscribe((docData: any) => {
      this.itinerary = { ...docData };
    });
    return this.itinerary;
  }

  delete(id: string) {
    let $itineraryRef = doc(this.firestore, 'itineraries/' + id);
    return deleteDoc($itineraryRef);
  }

  addItinerary(itinerary: Itinerary) {
    let $itineraryRef = collection(this.firestore, 'itineraries');
    return addDoc($itineraryRef, itinerary);
  }

  update(itinerary: Itinerary, id: string) {
    let $itineraryRef = doc(this.firestore, 'itineraries/' + id);
    return setDoc($itineraryRef, itinerary);
  }
}
