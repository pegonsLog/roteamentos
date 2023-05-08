import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { EnterprisesModule } from './_modules/enterprises.module';
import { HeaderModule } from './_modules/header.module';
import { HomeModule } from './_modules/home.module';
import { ItinerariesModule } from './_modules/itineraries.module';
import { LoginModule } from './_modules/login.module';
import { ShiftsModule } from './_modules/shifts.module';
import { SidenavModule } from './_modules/sidenav.module';
import { UsersModule } from './_modules/users.module';
import { AngularMaterialModule } from './_shared/angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    UsersModule,
    EnterprisesModule,
    ItinerariesModule,
    ShiftsModule,
    LoginModule,
    HomeModule,
    HeaderModule,
    SidenavModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
