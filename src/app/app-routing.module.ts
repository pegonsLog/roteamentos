import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_login/login.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', component: LoginComponent },

  {
    path: 'enterprise',
    loadChildren: () =>
      import('src/app/components/enterprises/enterprises.module').then(
        (m) => m.EnterprisesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
