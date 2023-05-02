import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Itinerary } from 'src/app/_shared/models/Itinerary';
import { ItinerariesService } from '../itineraries.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-itinerary-update',
  templateUrl: './itinerary-update.component.html',
  styleUrls: ['./itinerary-update.component.scss']
})
export class ItineraryUpdateComponent {
  form: FormGroup;
  id = new FormControl('');
  name = new FormControl('');
  direction = new FormControl('');
  extension = new FormControl('');
  full = new FormControl('');
  partial = new FormControl('');
  linkItinerary = new FormControl('');

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
    private location: Location,
    private itineraryService: ItinerariesService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSave() {
    if (this.form.valid) {
      const itineraryForm = this.form.getRawValue();
      this.itineraryService.addItinerary(itineraryForm).then(
        () => this.router.navigate(['itinerary/list']),
        (error: any) => console.error('Erro ao adicionar a rota', error)
      );
    }
  }

  onShiftList() {
    this.location.back();
  }
}
