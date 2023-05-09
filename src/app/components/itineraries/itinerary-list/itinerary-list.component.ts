import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Itinerary } from 'src/app/_models/Itinerary';
import { ItinerariesService } from 'src/app/components/itineraries/itineraries.service';

@Component({
  selector: 'app-itinerary-list',
  templateUrl: './itinerary-list.component.html',
  styleUrls: ['./itinerary-list.component.scss'],
})
export class ItineraryListComponent {
  itineraries$: Observable<any>;
  idShift: string = '';
  idEnterprise: string = '';

  user: string = '';
  password: string = '';
  name: string = '';
  role: string = '';

  displayedColumns: string[] = [
    'name',
    'direction',
    'extension',
    'full',
    'partial',
    'actions',
  ];

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
      this.idEnterprise = this.route.snapshot.queryParams['idEnterprise'];
      this.itineraries$ = itinerariesService
      .list()
      .pipe(
        map((itineraries: Itinerary[]) =>
        itineraries.filter(
          (itinerary: Itinerary) => itinerary.idShift === this.idShift
          )
          )
          );
        }

        onAdd(): void {
          this.router.navigate(['itinerary/new'], {
            queryParams: {
              idShift: this.idShift,
              idEnterprise: this.idEnterprise,
      },
    });
  }

  onUpdate(itinerary: Itinerary, idEnterpriseForm: string): void {
    this.router.navigate(['itinerary/update', itinerary.id], {
      queryParams: {
        idShift: itinerary.idShift,
        idEnterprise: idEnterpriseForm,
      },
    });
  }

  onDelete(itinerary: Itinerary): void {
    this.itinerariesService
    .delete(itinerary.id)
    .then(() => {
      console.log(itinerary.name + ' foi deletada com sucesso!');
      })
      .catch((err) => {
        console.log('Deu Erro!');
      });
  }

  onBack(idEnterpriseForm: string) {
    this.router.navigate(['shift/list'], {
      queryParams: {
        idEnterprise: idEnterpriseForm,
      },
    });
  }

  onMaps(idEnterpriseForm: string, idShift: string) {
    this.router.navigate(['itinerary/maps'], {
      queryParams: {
        idShift: idShift,
        idEnterprise: idEnterpriseForm,
      },
    });
  }
}
