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
    this.passengers = this.passengerService.getPassengers();
  }

  /**
   * This function catch remove event
   * @param event parameter event has information on what raised this event
   */
  handleRemove(event) {
    /***
     * Implements logic to remove one passenger from list
     * usign filter to remove passenger
     */
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }

  /**
   * handleEdit catches edit event
   * @param event event contains data from raised event
   */
  handleEdit(event: Passenger) {
    /**
     * Implements logic to edit one passenger from pasengers list
     * using Object.assing, this function takes passenger and merges
     * with the event:passenger object, taking the most recent values
     */
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
}
