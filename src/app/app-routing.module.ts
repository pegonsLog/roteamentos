import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },

  {
    path: 'home',
    loadChildren: () =>
      import('src/app/_modules/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'enterprise',
    loadChildren: () =>
      import('src/app/_modules/enterprises.module').then(
        (m) => m.EnterprisesModule
      ),
  },
  {
    path: 'shift',
    loadChildren: () =>
      import('src/app/_modules/shifts.module').then(
        (m) => m.ShiftsModule
      ),
  },
  {
    path: 'itinerary',
    loadChildren: () =>
      import('src/app/_modules/itineraries.module').then(
        (m) => m.ItinerariesModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
