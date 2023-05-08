import { Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Itinerary } from 'src/app/_models/Itinerary';
import { ItinerariesService } from 'src/app/_services/itineraries.service';

@Component({
  selector: 'app-itinerary-update',
  templateUrl: './itinerary-update.component.html',
  styleUrls: ['./itinerary-update.component.scss'],
})
export class ItineraryUpdateComponent implements OnDestroy {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    direction: new FormControl(''),
    extension: new FormControl(''),
    full: new FormControl(''),
    partial: new FormControl(''),
    linkItinerary: new FormControl(''),
  });

  idItinerary: string = '';
  subscription: Subscription = new Subscription();

  idEnterprise: string = '';
  idShift: string = '';
  itineraryId: string = '';
  itinerary: Itinerary = {
    id: '',
    name: '',
    direction: '',
    extension: 0,
    full: 0,
    partial: 0,
    linkItinerary: '',
    idShift: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private itineraryService: ItinerariesService,
    private fb: FormBuilder
  ) {
    this.itineraryId = this.route.snapshot.params['id'];
    this.idEnterprise = this.route.snapshot.queryParams['idEnterprise'];
    this.idShift = this.route.snapshot.queryParams['idShift'];

    this.subscription = this.itineraryService
      .getItinerary(this.itineraryId)
      .subscribe((itinerary: Itinerary) => {
        this.form = this.fb.group({
          name: [itinerary.name, Validators.required],
          direction: [itinerary.direction, Validators.required],
          extension: [itinerary.extension, Validators.required],
          full: [itinerary.full, Validators.required],
          partial: [itinerary.partial, Validators.required],
          linkItinerary: [itinerary.linkItinerary, Validators.required],
          idShift: [itinerary.idShift, Validators.required],
        });
      });
  }

  onSave(itineraryId: string, idEnterpriseForm: string, idShiftForm: string) {
    if (this.form.valid) {
      const itineraryForm = this.form.getRawValue();
      this.itineraryService.update(itineraryForm, itineraryId).then(
        () =>
          this.router.navigate(['itinerary/list'], {
            queryParams: {
              idShift: idShiftForm,
              idEnterprise: idEnterpriseForm,
            },
          }),
        (error: any) => console.error('Erro ao alterar a rota', error)
      );
    }
  }

  onShiftList(idShiftForm: string, idEnterpriseForm: string) {
    this.router.navigate(['itinerary/list'], {
      queryParams: {
        idShift: idShiftForm,
        idEnterprise: idEnterpriseForm,
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
