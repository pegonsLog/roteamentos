import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/_shared/angular-material/angular-material.module';
import { EnterpriseCreateComponent } from '../components/enterprises/enterprise-create/enterprise-create.component';
import { EnterpriseListComponent } from '../components/enterprises/enterprise-list/enterprise-list.component';
import { EnterpriseUpdateComponent } from '../components/enterprises/enterprise-update/enterprise-update.component';
import { EnterpriseRoutes } from '../_routings/enterprise.routing';

@NgModule({
  declarations: [EnterpriseListComponent, EnterpriseCreateComponent, EnterpriseUpdateComponent],
  imports: [CommonModule, AngularMaterialModule, EnterpriseRoutes, ReactiveFormsModule, FormsModule],
  exports: [EnterpriseListComponent, EnterpriseCreateComponent],
})
export class EnterprisesModule {}
