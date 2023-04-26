import { Routes, RouterModule } from '@angular/router';
import { ShiftCreateComponent } from './shift-create/shift-create.component';
import { ShiftListComponent } from './shift-list/shift-list.component';
import { ShiftUpdateComponent } from './shift-update/shift-update.component';

const routes: Routes = [

  { path: 'new', component: ShiftCreateComponent },
  { path: 'update/:id', component: ShiftUpdateComponent },
  { path: 'detail/:id', component: ShiftListComponent }
];

export const ShiftsRoutes = RouterModule.forChild(routes);
