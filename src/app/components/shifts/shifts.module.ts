import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/_shared/angular-material/angular-material.module';
import { ShiftsRoutes } from './shifts-routing.module';
import { ShiftCreateComponent } from './shift-create/shift-create.component';
import { ShiftListComponent } from './shift-list/shift-list.component';
import { ShiftUpdateComponent } from './shift-update/shift-update.component';


@NgModule({
  declarations: [ShiftListComponent, ShiftCreateComponent, ShiftUpdateComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ShiftsRoutes,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ShiftListComponent, ShiftCreateComponent, ShiftUpdateComponent],
})
export class ShiftsModule {}
