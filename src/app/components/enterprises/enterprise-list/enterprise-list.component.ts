import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Enterprise } from 'src/app/_models/Enterprise';
import { EnterpriseService } from 'src/app/components/enterprises/enterprise.service';

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.scss'],
})
export class EnterpriseListComponent {
  enterprises$: Observable<any>;
  subscription = new Subscription();

  user: string = '';
  password: string = '';
  name: string = '';
  role: string = '';

  displayedColumns: string[] = ['name', 'actions'];

  constructor(
    private enterpriseService: EnterpriseService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user = this.route.snapshot.queryParams['user'];
    this.password = this.route.snapshot.queryParams['password'];
    this.name = this.route.snapshot.queryParams['name'];
    this.role = this.route.snapshot.queryParams['role'];
    this.enterprises$ = enterpriseService.list();
  }

  onAdd(): void {
    this.router.navigate(['enterprise/new']);
  }
  onDetails(enterprise: Enterprise): void {
    this.router.navigate(['shift/detail'], {
      queryParams: { idEnterprise: enterprise.id },
    });
  }
  onUpdate(enterprise: Enterprise): void {
    this.router.navigate(['enterprise/update', enterprise.id]);
  }
  onDelete(enterprise: Enterprise): void {
    this.enterpriseService
      .delete(enterprise.id)
      .then(() => {
        console.log(enterprise.name + ' foi deletada com sucesso!');
      })
      .catch((err) => {
        console.log('Deu Erro!');
      });
  }

  onBack() {
    this.router.navigate(['/']);
  }
}
