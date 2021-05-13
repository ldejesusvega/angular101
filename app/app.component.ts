import { Component } from "@angular/core";

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
}
@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <h3>Airline Passenger</h3>
      <h4>Template definition</h4>
      <ul>
        <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
          <li>{{ i }} -- {{ passenger.id }}, {{ passenger.fullname }}</li>
        </template>
      </ul>
      <br />

      <h4>use of class</h4>
      <h5>this works when_ only require_ add one class</h5>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }} -- {{ passenger.id }}, {{ passenger.fullname }}
        </li>
      </ul>

      <br />
      <h4>use of ngclass</h4>
      <h5>this works when_ only require_ add multiple classes</h5>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span
            class="status"
            [ngClass]="{
              'checked-in': passenger.checkedIn,
              'checked-out': !passenger.checkedIn
            }"
          ></span>
          {{ i }} -- {{ passenger.id }}, {{ passenger.fullname }}
        </li>
      </ul>
    </div>
  `,
})

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
    },
    {
      id: 2,
      fullname: "Rose",
      checkedIn: false,
    },
    {
      id: 3,
      fullname: "James",
      checkedIn: false,
    },
    {
      id: 4,
      fullname: "Thelma",
      checkedIn: true,
    },
    {
      id: 5,
      fullname: "Louis",
      checkedIn: false,
    },
    {
      id: 6,
      fullname: "Enrique",
      checkedIn: true,
    },
  ];
}
