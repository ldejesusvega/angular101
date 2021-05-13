import { Component } from "@angular/core";
import { Timestamp } from "rxjs";

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number;
}
/***
 *   checkInDate: number | null;
 * This define checkInDate as number that can be null
 *
 * checkInDate?: number ;
 * Using this prevent error if the api si not returning this property
 *
 */

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <h3>Airline Passenger</h3>
      <h4>Pipes, data_ transformation</h4>
      <h5>pipes procesa datos para ser presentados</h5>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }} -- {{ passenger.id }}, {{ passenger.fullname }}
          <p>{{ passenger | json }}</p>

          <div class="date">
            Checked In Date :
            {{
              passenger.checkInDate
                ? (passenger.checkInDate | date: "yMMMMd" | uppercase)
                : "Not Checked Id"
            }}
          </div>
        </li>
      </ul>
    </div>
  `,
})
/**
 * <!--build in functions json devuelve el objeto en formato json -->
 * <!-- build in functions uppercase devuelve la cadena en mayusculas -->
 */

// Property binding
export class AppComponent {
  title: string;
  isHappy: boolean = false;
  numberOne: number = 1;
  numberTwo: number = 2;
  logo: string = "img/logo.svg";
  name: string = "";
  constructor() {
    this.title = "Ultimate Angular";
  }

  passengers: Passenger[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedIn: true,
      checkInDate: 1620723600000,
    },
    {
      id: 2,
      fullname: "Rose",
      checkedIn: true,
      checkInDate: 1620727200000,
    },
    {
      id: 3,
      fullname: "James",
      checkedIn: false,
      checkInDate: null,
    },
    {
      id: 4,
      fullname: "Thelma",
      checkedIn: true,
      checkInDate: 1620734400000,
    },
    {
      id: 5,
      fullname: "Louis",
      checkedIn: false,
      checkInDate: null,
    },
    {
      id: 6,
      fullname: "Enrique",
      checkedIn: true,
      checkInDate: 1620648000000,
    },
  ];
}
