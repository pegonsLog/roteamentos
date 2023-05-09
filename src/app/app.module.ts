import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/_fragments/header.module';
import { SidenavModule } from './components/_fragments/sidenav.module';
import { HomeModule } from './components/_home/home.module';
import { UsersModule } from './components/_users/users.module';
import { EnterprisesModule } from './components/enterprises/enterprises.module';
import { ItinerariesModule } from './components/itineraries/itineraries.module';
import { ShiftsModule } from './components/shifts/shifts.module';
import { LoginModule } from './components/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UsersModule,
    EnterprisesModule,
    ItinerariesModule,
    ShiftsModule,
    HomeModule,
    HeaderModule,
    SidenavModule,
    LoginModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
