import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Shift } from 'src/app/_shared/models/Shift';
import { ShiftsService } from '../shifts.service';


@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent {
  shifts$: Observable<any>;
  subscription = new Subscription();

  user: string = '';
  password: string = '';
  name: string = '';
  role: string = '';

  displayedColumns: string[] = ['name', 'actions'];

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
    this.shifts$ = shiftService.list();
  }

  onAdd(): void {
    this.router.navigate(['shift/new']);
  }
  onDetails(shift: Shift): void {
    this.router.navigate(['shift/detail', shift.id])
     }
  onUpdate(shift: Shift): void {
 this.router.navigate(['shift/update', shift.id])
  }
  onDelete(shift: Shift): void {
    this.shiftService.delete(shift.id).then(
      () => {
        console.log(shift.period + ' foi deletada com sucesso!')
      })
      .catch((err) => {
        console.log('Deu Erro!')
      })
  }

  onBack() {
    this.router.navigate(['/']);
  }
}
