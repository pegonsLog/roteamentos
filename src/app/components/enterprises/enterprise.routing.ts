import { Routes, RouterModule } from '@angular/router';
import { EnterpriseCreateComponent } from './enterprise-create/enterprise-create.component';
import { EnterpriseListComponent } from './enterprise-list/enterprise-list.component';
import { EnterpriseUpdateComponent } from './enterprise-update/enterprise-update.component';


const routes: Routes = [
  {path: 'list', component: EnterpriseListComponent},
  {path: 'new', component: EnterpriseCreateComponent},
  {path: 'update/:id', component: EnterpriseUpdateComponent},
];

export const EnterpriseRoutes = RouterModule.forChild(routes);
