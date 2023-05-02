import { Location } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Shift } from 'src/app/_shared/models/Shift';
import { ShiftsService } from '../shifts.service';

@Component({
  selector: 'app-shift-create',
  templateUrl: './shift-create.component.html',
  styleUrls: ['./shift-create.component.scss'],
})
export class ShiftCreateComponent {
  form: FormGroup;
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private shiftService: ShiftsService,
    private fb: FormBuilder
  ) {
    const idEnterprise = this.route.snapshot.queryParams['idEnterprise'];
    this.form = this.fb.group({
      shiftName: ['', Validators.required],
      period: ['', Validators.required],
      idEnterprise: [(this.shift.idEnterprise = idEnterprise)],
      linkShift: ['', Validators.required],
    });
  }

  onSave() {
    // if (this.form.valid) {
    const shiftForm = this.form.getRawValue();
    this.shiftService.addShift(shiftForm).then(
      () => this.router.navigate(['shift/list']),
      (error: any) => console.error('Erro ao adicionar a turno', error)
    );
    // }
  }

  onShiftList() {
    this.location.back();
  }
}
