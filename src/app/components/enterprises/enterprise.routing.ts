import { Routes, RouterModule } from '@angular/router';
import { EnterpriseListComponent } from './enterprise-list/enterprise-list.component';
import { EnterpriseCreateComponent } from './enterprise-create/enterprise-create.component';

const routes: Routes = [
  {path: 'list', component: EnterpriseListComponent},
  {path: 'new', component: EnterpriseCreateComponent},
];

export const EnterpriseRoutes = RouterModule.forChild(routes);
