import { Component, Input } from "@angular/core";
import { Passenger } from "../../modules/passenger.interface";
@Component({
  selector: "passenger-count",
  template: `
    <div>
      <h3>Airline Passenger</h3>
      <div>Total checked in : {{ checkedInCounts() }} / {{ items.length }}</div>
    </div>
  `,
})
export class PassengerCountComponent {
  @Input()
  items: Passenger[];

  checkedInCounts(): number {
    if (!this.items) return; // Validate if items is not null

    // return this.items.filter((passenger: Passenger) => {
    //   return passenger.checkedIn;
    // }).length;
    // This two segments return the same
    return this.items.filter((passenger: Passenger) => passenger.checkedIn)
      .length;
  }
}
