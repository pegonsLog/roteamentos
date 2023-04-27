import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ItinerariesService } from '../itineraries.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Itinerary } from 'src/app/_shared/models/Itinerary';

@Component({
  selector: 'app-itinerary-list',
  templateUrl: './itinerary-list.component.html',
  styleUrls: ['./itinerary-list.component.scss']
})
export class ItineraryListComponent {
  itineraries$: Observable<any>;
  idShift: string = '';
  subscription = new Subscription();

  user: string = '';
  password: string = '';
  name: string = '';
  role: string = '';

  displayedColumns: string[] = ['name', 'actions'];

  constructor(
    private itinerariesService: ItinerariesService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user = this.route.snapshot.queryParams['user'];
    this.password = this.route.snapshot.queryParams['password'];
    this.name = this.route.snapshot.queryParams['name'];
    this.role = this.route.snapshot.queryParams['role'];
    this.idShift = this.route.snapshot.queryParams['idShift'];
    this.itineraries$ = itinerariesService.list();
  }

  onAdd(): void {
    this.router.navigate(['itinerary/new']);
  }
  onDetails(itinerary: Itinerary): void {
    this.router.navigate(['itinerary/detail'])
     }
  onUpdate(itinerary: Itinerary): void {
 this.router.navigate(['itinerary/update', itinerary.id])
  }
  onDelete(itinerary: Itinerary): void {
    this.itinerariesService.delete(itinerary.id).then(
      () => {
        console.log(itinerary.name + ' foi deletada com sucesso!')
      })
      .catch((err) => {
        console.log('Deu Erro!')
      })
  }

  onBack() {
    this.router.navigate(['shift/list']);
  }
}
