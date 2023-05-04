import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { LoginModule } from './_login/login.module';
import { AngularMaterialModule } from './_shared/angular-material/angular-material.module';
import { UsersModule } from './_users/users.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterprisesModule } from './components/enterprises/enterprises.module';
import { ItinerariesModule } from './components/itineraries/itineraries.module';
import { ShiftsModule } from './components/shifts/shifts.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    LoginModule,
    UsersModule,
    EnterprisesModule,
    ItinerariesModule,
    ShiftsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
