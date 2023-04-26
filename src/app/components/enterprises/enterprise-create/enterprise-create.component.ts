import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnterpriseService } from '../enterprise.service';

@Component({
  selector: 'app-enterprise-form',
  templateUrl: './enterprise-create.component.html',
  styleUrls: ['./enterprise-create.component.scss'],
})
export class EnterpriseCreateComponent {
  form: FormGroup;
  name = new FormControl('');

  constructor(
    private router: Router,
    private location: Location,
    private enterpriseService: EnterpriseService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSave() {

    if (this.form.valid) {
      const enterpriseForm = this.form.getRawValue();
      this.enterpriseService.addEnterprise(enterpriseForm).then(
        () => this.router.navigate(['enterprise/list']),
        (error: any) => console.error('Erro ao adicionar a empresa', error)
    )}
  }

  onEnterpriseList() {
    this.location.back();
  }
}
