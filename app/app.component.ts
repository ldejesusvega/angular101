import { Component } from "@angular/core";
import { Timestamp } from "rxjs";

/***
 * Se crea esta nueva interfaz para definir el objeto Child
 */
interface Child {
  name: string;
  age: number;
}
/**
 * El objeto Passenger implementa Child en ...
 * children: Child[] | null;
 * teniendo la opcion de ser un objeto nulo
 */
interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number;
  children: Child[] | null;
}

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
          <div class="children">
            Children:{{ passenger.children?.lenght || 0 }}
          </div>
        </li>
      </ul>
    </div>
  `,
})
/**
 * Se agregar el div para children y mostrar la informacion de children
 * Children:{{ passenger.children?.lenght || 0 }}
 * Se agrega ? para permitir la navegacion segura al examinar un objeto que puede ser nulo.
 * de otra forma cuando no haya elementos en child angular devolveria error
 * || 0 esto se imprime cuando children es nulo
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
