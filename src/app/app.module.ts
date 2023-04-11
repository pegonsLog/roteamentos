import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './_login/login.module';
import { AngularMaterialModule } from './_shared/angular-material/angular-material.module';
import { UsersModule } from './_users/users.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterprisesModule } from './components/enterprises/enterprises.module';
import { RoutesModule } from './components/routes/routes.module';
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
    RoutesModule,
    ShiftsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
