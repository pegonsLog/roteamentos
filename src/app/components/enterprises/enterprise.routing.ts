import { Routes, RouterModule } from '@angular/router';
import { EnterpriseListComponent } from './enterprise-list/enterprise-list.component';

const routes: Routes = [
  {path: 'enterprise', component: EnterpriseListComponent},
];

export const EnterpriseRoutes = RouterModule.forChild(routes);
