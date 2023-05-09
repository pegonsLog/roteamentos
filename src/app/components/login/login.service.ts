import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import {
  collection, DocumentData, getDocs, getFirestore
} from 'firebase/firestore/lite';
import { User } from '../../_models/User';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

app = initializeApp(environment.firebase);
db = getFirestore(this.app);

users: User[] = [];
role: string = '';

list(): Observable<User[]> {
  const users = collection(this.db, 'users');
  return new Observable<DocumentData[]>((subscriber) => {
    getDocs(users)
      .then((usersSnapshot) => {
        const usersList = usersSnapshot.docs.map((doc) => doc.data());
        subscriber.next(usersList);
        subscriber.complete();
      })
      .catch((error) => {
        subscriber.error(error);
      });
  }).pipe(map((usersList) => usersList as User[]));
}
}
