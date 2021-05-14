import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
import { Passenger } from "../../modules/passenger.interface";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <h4>using components</h4>
      <passenger-count [items]="passengers"> </passenger-count>
      <div *ngFor="let passenger of passengers">
        {{ passenger.fullname }}
      </div>
      <br />
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
      ></passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  /**
   * service injection with Dependency Injection
   */
  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit() {
    // this is a syncronous call
    // this.passengers = this.passengerService.getPassengers();
    this.passengerService.getPassengers().subscribe((data: Passenger[]) => {
      console.log("Data : ", data);
      this.passengers = data;
    });
  }

  /**
   * This function catch remove event
   * @param event parameter event has information on what raised this event
   */
  handleRemove(event) {
    /***
     * Imlpements delete function to remove passenger element from passengers list
     */
    this.passengerService
      .removePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id;
        });
      });
  }

  /**
   * handleEdit catches edit event
   * @param event event contains data from raised event
   */
  handleEdit(event: Passenger) {
    /**
     * Implements Passenger Service to Edit passenger from list
     */
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
  }
}
