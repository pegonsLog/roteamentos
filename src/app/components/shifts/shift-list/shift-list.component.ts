import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Shift } from 'src/app/_models/Shift';
import { ShiftsService } from 'src/app/_services/shifts.service';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss'],
})
export class ShiftListComponent implements OnDestroy {
  shifts$: Observable<any>;
  idEnterprise: string = '';
  idShift: string = '';

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
    this.idEnterprise = this.route.snapshot.queryParams['idEnterprise'];
    this.idShift = this.route.snapshot.queryParams['idShift'];

    this.shifts$ = shiftService
      .list()
      .pipe(
        map((shifts: Shift[]) =>
          shifts.filter(
            (shift: Shift) => shift.idEnterprise === this.idEnterprise
          )
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
        idEnterprise: shift.idEnterprise,
      },
    });
  }

  onUpdate(shift: Shift): void {
    console.log(shift)
    this.router.navigate(['shift/update', shift.id], {
      queryParams: {
        shiftName: shift.shiftName,
        period: shift.period,
        linkShift: shift.linkShift,
        idEnterprise: shift.idEnterprise
      },
    });
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
