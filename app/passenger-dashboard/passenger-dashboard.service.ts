import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Passenger } from "./modules/passenger.interface";

// Add this Injectable, so we can inject http services in the contructor
@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {
    console.log(http);
  }
  getPassengers(): Passenger[] {
    return [
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
}
