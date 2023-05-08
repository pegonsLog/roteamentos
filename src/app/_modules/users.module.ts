import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserListComponent } from '../_users/user-list/user-list.component';
import { UserCreateComponent } from '../_users/user-form/user-create.component';
import { UserUpdateComponent } from '../_users/user-update/user-update.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../_shared/angular-material/angular-material.module';



@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UsersModule { }