import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouteFormComponent } from './route-form/route-form.component';
import { RouteListComponent } from './route-list/route-list.component';



@NgModule({
  declarations: [
    RouteListComponent,
    RouteFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
