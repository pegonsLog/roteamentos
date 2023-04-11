import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseListComponent } from './enterprise-list/enterprise-list.component';
import { EnterpriseFormComponent } from './enterprise-form/enterprise-form.component';



@NgModule({
  declarations: [
    EnterpriseListComponent,
    EnterpriseFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EnterprisesModule { }
