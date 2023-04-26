import { Component, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { EnterpriseService } from '../enterprise.service';
import { Location } from '@angular/common';
import { Enterprise } from 'src/app/_shared/models/Enterprise';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-enterprise-update',
  templateUrl: './enterprise-update.component.html',
  styleUrls: ['./enterprise-update.component.scss'],
})
export class EnterpriseUpdateComponent implements OnDestroy {
  name = new FormControl('');
  enterpriseId: string = '';
  enterprise: Enterprise = {
    id: '',
    name: ''
  };
  subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private enterpriseService: EnterpriseService,
    private fb: FormBuilder
  ) {
    this.enterpriseId = this.route.snapshot.params['id'];
    this.subscription = this.enterpriseService
      .getEnterprise(this.enterpriseId)
      .subscribe((data: Enterprise) => (this.enterprise = data));
   }

  onSave(enterpriseForm: string) {
    if (enterpriseForm) {
            this.enterpriseService.update(this.enterprise, this.enterpriseId).then(
        () => this.router.navigate(['enterprise/list']),
        (error: any) => console.error('Erro ao alterar a empresa', error)
        );
      }
    }

    onEnterpriseList() {
      this.location.back();
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
  }
