import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Shift } from 'src/app/_shared/models/Shift';
import { ShiftsService } from '../shifts.service';

@Component({
  selector: 'app-shift-update',
  templateUrl: './shift-update.component.html',
  styleUrls: ['./shift-update.component.scss'],
})
export class ShiftUpdateComponent implements OnDestroy {
  form: FormGroup;
  shiftName = new FormControl();
  period = new FormControl();
  linkShift = new FormControl();

  //shiftId: string = '';
  idEnterprise: string = '';
  shift: Shift = {
    id: '',
    shiftName: '',
    period: '',
    idEnterprise: '',
    linkShift: '',
  };

  subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private shiftsService: ShiftsService,
    private fb: FormBuilder
  ) {
    const shiftId = this.route.snapshot.params['id'];
    this.shift.idEnterprise = this.route.snapshot.queryParams['idEnterprise'];
    this.shift.period = this.route.snapshot.queryParams['period'];
    this.shift.shiftName = this.route.snapshot.queryParams['shiftName'];
    this.shift.linkShift = this.route.snapshot.queryParams['linkShift'];

    this.form = this.fb.group({
      shiftName: [this.shift.shiftName, Validators.required],
      period: [this.shift.period, Validators.required],
      idEnterprise: [this.shift.idEnterprise, Validators.required],
      linkShift: [this.shift.linkShift, Validators.required],
    });
  }


  onSave() {
    if (this.form.valid) {
      const shift = this.form.getRawValue();
      this.shiftsService.update(shift, shift.id).then(
        () =>
          this.router.navigate(['shift/list'], {
            queryParams: {
              idEnterprise: this.idEnterprise,
            },
          }),
        (error: any) => console.error('Erro ao alterar a empresa', error)
      );
    }
  }

  onShiftList() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
