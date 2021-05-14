import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../modules/passenger.interface";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <h4>using components</h4>
      <passenger-count [items]="passengers"> </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
      ></passenger-detail>
      <!-- 
        This passenger-detail adds couple events 
        _edit _and _remove _to handle raised _by EventEmitters  
     -->
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor() {}
  ngOnInit() {
    console.log("OnInit");
    this.passengers = [
      {
        id: 1,
        fullname: "Stephen",
        checkedIn: true,
        checkInDate: 1620723600000,
        children: [
          { name: "Ted", age: 12 },
          { name: "Chloe", age: 8 },
        ],
      },
      {
        id: 2,
        fullname: "Rose",
        checkedIn: true,
        checkInDate: 1620727200000,
        children: null,
      },
      {
        id: 3,
        fullname: "James",
        checkedIn: false,
        checkInDate: null,
        children: [{ name: "Jessica", age: 13 }],
      },
      {
        id: 4,
        fullname: "Thelma",
        checkedIn: true,
        checkInDate: 1620734400000,
        children: [
          { name: "Tina", age: 5 },
          { name: "Jack", age: 2 },
        ],
      },
      {
        id: 5,
        fullname: "Louis",
        checkedIn: false,
        checkInDate: null,
        children: null,
      },
      {
        id: 6,
        fullname: "Enrique",
        checkedIn: true,
        checkInDate: 1620648000000,
        children: [
          { name: "Kathleen", age: 20 },
          { name: "Joe", age: 18 },
        ],
      },
    ];
  }

  /**
   * This function catch remove event
   * @param event parameter event has information on what raised this event
   */
  handleRemove(event) {
    console.log(" remove event in parent component");
    console.log(event);
  }

  /**
   * handleEdit catches edit event
   * @param event event contains data from raised event
   */
  handleEdit(event) {
    console.log(" edit event in parent component");
    console.log(event);
  }
}
