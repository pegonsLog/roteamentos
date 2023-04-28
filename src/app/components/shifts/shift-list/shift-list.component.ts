import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription, filter, map } from 'rxjs';
import { Shift } from 'src/app/_shared/models/Shift';
import { ShiftsService } from '../shifts.service';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss'],
})
export class ShiftListComponent implements OnDestroy {
  shifts$: Observable<any>;
  idEnterprise: string = '';

  user: string = '';
  password: string = '';
  name: string = '';
  role: string = '';

  displayedColumns: string[] = ['shiftName', 'period', 'actions'];

  constructor(
    private shiftService: ShiftsService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user = this.route.snapshot.queryParams['user'];
    this.password = this.route.snapshot.queryParams['password'];
    this.name = this.route.snapshot.queryParams['name'];
    this.role = this.route.snapshot.queryParams['role'];
    const idEnterprise = this.route.snapshot.queryParams['idEnterprise'];

    this.shifts$ = shiftService
      .list()
      .pipe(
        map((shifts: Shift[]) =>
          shifts.filter((shift: Shift) => shift.idEnterprise === idEnterprise)
        )
      );
  }
  ngOnDestroy(): void {}

  onAdd(idEnterprise: string): void {
    this.router.navigate(['shift/new'], {
      queryParams: { idEnterprise },
    });
  }
  onDetails(shift: Shift): void {
    this.router.navigate(['itinerary/list'], {
      queryParams: {
        idShift: shift.id,
        idEnterprise: shift.idEnterprise
      },
    });
  }
  onUpdate(shift: Shift): void {
    this.router.navigate(['shift/update', shift.id]);
  }
  onDelete(shift: Shift): void {
    this.shiftService
      .delete(shift.id)
      .then(() => {
        console.log(shift.period + ' foi deletada com sucesso!');
      })
      .catch((err) => {
        console.log('Deu Erro!');
      });
  }

  onBack() {
    this.router.navigate(['enterprise/list']);
  }
}
