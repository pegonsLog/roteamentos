import { Routes, RouterModule } from '@angular/router';
import { ItineraryListComponent } from './itinerary-list/itinerary-list.component';
import { ItineraryCreateComponent } from './itinerary-create/itinerary-create.component';
import { ItineraryUpdateComponent } from './itinerary-update/itinerary-update.component';
import { ItineraryMapsComponent } from './itinerary-maps/itinerary-maps.component';

const routes: Routes = [

  { path: 'list', component: ItineraryListComponent },
  { path: 'maps', component: ItineraryMapsComponent },
  { path: 'new', component: ItineraryCreateComponent },
  { path: 'update/:id', component: ItineraryUpdateComponent },
];

export const ItinerariesRoutes = RouterModule.forChild(routes);
