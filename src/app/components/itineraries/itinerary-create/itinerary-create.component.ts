import { Location } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Itinerary } from 'src/app/_shared/models/Itinerary';
import { ItinerariesService } from '../itineraries.service';

@Component({
  selector: 'app-itinerary-create',
  templateUrl: './itinerary-create.component.html',
  styleUrls: ['./itinerary-create.component.scss'],
})
export class ItineraryCreateComponent {
  form: FormGroup;
  idShift: string = '';
  idEnterprise: string = '';

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
    private route: ActivatedRoute,
    private location: Location,
    private itineraryService: ItinerariesService,
    private fb: FormBuilder
  ) {
    this.idShift = this.route.snapshot.queryParams['idShift'];
    this.idEnterprise = this.route.snapshot.queryParams['idEnterprise'];
    console.log(this.idEnterprise)

    this.form = this.fb.group({
      name: ['', Validators.required],
      direction: ['', Validators.required],
      extension: ['', Validators.required],
      full: ['', Validators.required],
      partial: ['', Validators.required],
      linkItinerary: ['', Validators.required],
      idShift: [(this.itinerary.idShift = this.idShift)],
    });
  }

  onSave() {
    console.log(this.form.getRawValue());
    console.log(this.idShift);
    // if (this.form.valid) {
    // const itineraryForm = this.form.getRawValue();
    // this.itineraryService.addItinerary(itineraryForm).then(
    //   () =>
    //     this.router.navigate(['itinerary/list'], {
    //       queryParams: {
    //         idShift: this.idShift,
    //       },
    //     }),
    //   (error: any) => console.error('Erro ao adicionar a rota', error)
    // );
    // }
  }

  onShiftList() {
    this.router.navigate(['itinerary/list'], {
      queryParams: {
        idShift: this.idShift,
        idEnterprise: this.idEnterprise,
      },
    });
  }
}
