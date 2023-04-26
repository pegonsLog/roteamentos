import { Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
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
  shiftName = new FormControl('');
  period = new FormControl('');
  linkShift = new FormControl('');
  shiftId: string = '';
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
    this.shiftId = this.route.snapshot.params['id'];
    this.subscription = this.shiftsService
      .getShift(this.shiftId)
      .subscribe((data: Shift) => (this.shift = data));
  }

  onSave() {
    if (this) {
      this.shiftsService.update(this.shift, this.shiftId).then(
        () => this.router.navigate(['shift/list']),
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
