import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },

  {
    path: 'enterprise',
    loadChildren: () =>
      import('src/app/components/enterprises/enterprises.module').then(
        (m) => m.EnterprisesModule
      ),
  },
  {
    path: 'shift',
    loadChildren: () =>
      import('src/app/components/shifts/shifts.module').then(
        (m) => m.ShiftsModule
      ),
  },
  {
    path: 'itinerary',
    loadChildren: () =>
      import('src/app/components/itineraries/itineraries.module').then(
        (m) => m.ItinerariesModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
