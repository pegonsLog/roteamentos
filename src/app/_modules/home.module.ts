import { HeaderModule } from './header.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutes } from '../_routings/home-routing.module';
import { HomeComponent } from '../components/home/home.component';
import { SidenavModule } from './sidenav.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutes, SidenavModule, HeaderModule],
  exports: [HomeComponent],
})
export class HomeModule {}
