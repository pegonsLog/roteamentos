import { Routes, RouterModule } from '@angular/router';
import { ItineraryCreateComponent } from '../components/itineraries/itinerary-create/itinerary-create.component';
import { ItineraryListComponent } from '../components/itineraries/itinerary-list/itinerary-list.component';
import { ItineraryMapsComponent } from '../components/itineraries/itinerary-maps/itinerary-maps.component';
import { ItineraryUpdateComponent } from '../components/itineraries/itinerary-update/itinerary-update.component';


const routes: Routes = [

  { path: 'list', component: ItineraryListComponent },
  { path: 'maps', component: ItineraryMapsComponent },
  { path: 'new', component: ItineraryCreateComponent },
  { path: 'update/:id', component: ItineraryUpdateComponent },
];

export const ItinerariesRoutes = RouterModule.forChild(routes);
