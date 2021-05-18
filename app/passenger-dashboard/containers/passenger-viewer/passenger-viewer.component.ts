import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import "rxjs/add/operator/switchMap";
import { Passenger } from "../../modules/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: "passenger-viewer",
  styleUrls: ["passenger-viewer.component.scss"],
  template: `
    <!-- <div>
      {{ passenger | json }}
    </div> -->
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
    // this.route.params.subscribe((data: Params) => {
    //   console.log(data);
    // });

    this.route.params
      .switchMap((data: Passenger) =>
        this.passengerService.getPassenger(data.id)
      )
      .subscribe((data) => {
        this.passenger = data;
        console.log("data", data); // This line executes after data is colected and after the outside console.log
      });
    console.log("P", this.passenger); // This line executes before subscribe is completed
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      });
  }
}
