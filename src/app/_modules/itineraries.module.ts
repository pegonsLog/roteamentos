import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryListComponent } from '../components/itineraries/itinerary-list/itinerary-list.component';
import { ItineraryCreateComponent } from '../components/itineraries/itinerary-create/itinerary-create.component';
import { ItineraryUpdateComponent } from '../components/itineraries/itinerary-update/itinerary-update.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/_shared/angular-material/angular-material.module';
import { ItineraryListMapsComponent } from '../components/itineraries/itinerary-list-maps/itinerary-list-maps.component';
import { ItineraryMapsComponent } from '../components/itineraries/itinerary-maps/itinerary-maps.component';
import { ItinerariesRoutes } from '../_routings/itineraries-routing.module';

@NgModule({
  declarations: [
    ItineraryListComponent,
    ItineraryCreateComponent,
    ItineraryUpdateComponent,
    ItineraryListMapsComponent,
    ItineraryMapsComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ItinerariesRoutes,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ItineraryListComponent,
    ItineraryCreateComponent,
    ItineraryUpdateComponent,
    ItineraryListMapsComponent,
  ],
})
export class ItinerariesModule {}
