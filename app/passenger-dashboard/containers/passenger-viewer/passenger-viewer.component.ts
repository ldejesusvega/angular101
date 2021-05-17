import { Component, OnInit } from "@angular/core";
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
  constructor(private passengerService: PassengerDashboardService) {}
  ngOnInit() {
    this.passengerService
      .getPassenger(1)
      .subscribe((data: Passenger) => (this.passenger = data));
    console.log("P", this.passenger);
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      });
  }
}
