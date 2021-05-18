import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import "rxjs/add/operator/switchMap";
import { Passenger } from "../../modules/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: "passenger-viewer",
  styleUrls: ["passenger-viewer.component.scss"],
  template: `
    <button (click)="goBack()">&lsaquo; Go Back</button>
    <passenger-form
      [detail]="passenger"
      (update)="onUpdatePassenger($event)"
    ></passenger-form>
  `,
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService
  ) {}
  ngOnInit() {
    this.route.params
      .switchMap((data: Passenger) =>
        this.passengerService.getPassenger(data.id)
      )
      .subscribe((data) => (this.passenger = data));
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      });
  }

  goBack() {
    this.router.navigate(["/passengers"]);
  }
}
