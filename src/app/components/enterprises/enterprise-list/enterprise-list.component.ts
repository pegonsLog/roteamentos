import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { EnterpriseService } from '../enterprise.service';
import { Enterprise } from 'src/app/_shared/models/Enterprise';

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.scss'],
})
export class EnterpriseListComponent implements OnInit, OnDestroy {
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
  onDelete(enterprise: Enterprise): void {
    console.log(enterprise);
    //this.enterpriseService.delete(id).then();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // this.subscription.unsubscribe;
  }

  onBack() {
    this.router.navigate(['/']);
  }
}
