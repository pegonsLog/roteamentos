import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseListComponent } from './enterprise-list/enterprise-list.component';
import { EnterpriseFormComponent } from './enterprise-form/enterprise-form.component';
import { AngularMaterialModule } from 'src/app/_shared/angular-material/angular-material.module';
import { EnterpriseRoutes } from './enterprise.routing';

@NgModule({
  declarations: [EnterpriseListComponent, EnterpriseFormComponent],
  imports: [CommonModule, AngularMaterialModule, EnterpriseRoutes],
  exports: [EnterpriseListComponent, EnterpriseFormComponent],
})
export class EnterprisesModule {}
