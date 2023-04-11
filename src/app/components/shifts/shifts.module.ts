import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShiftFormComponent } from './shift-form/shift-form.component';
import { ShiftListComponent } from './shift-list/shift-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShiftListComponent, ShiftFormComponent]
})
export class ShiftsModule { }
