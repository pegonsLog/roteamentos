import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutes } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../_fragments/header.module';
import { SidenavModule } from '../_fragments/sidenav.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutes, SidenavModule, HeaderModule],
  exports: [HomeComponent],
})
export class HomeModule {}
