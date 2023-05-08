import { Routes, RouterModule } from '@angular/router';
import { ShiftCreateComponent } from '../components/shifts/shift-create/shift-create.component';
import { ShiftListComponent } from '../components/shifts/shift-list/shift-list.component';
import { ShiftUpdateComponent } from '../components/shifts/shift-update/shift-update.component';


const routes: Routes = [

  { path: 'list', component: ShiftListComponent },
  { path: 'new', component: ShiftCreateComponent },
  { path: 'detail', component: ShiftListComponent },
  { path: 'update/:id', component: ShiftUpdateComponent },
];

export const ShiftsRoutes = RouterModule.forChild(routes);
