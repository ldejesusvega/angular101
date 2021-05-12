import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      {{ title }}
      <img [src]="logo" />
    </div>
    <br />
    <div class="app">
      <button (click)="handleClick()">Change Name</button>
      <input
        type="text"
        [ngModel]="name"
        (ngModelChange)="handleChange($event)"
      />
      <br />
      <input type="text" [(ngModel)]="name" />
      <div>{{ name }}</div>
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
  name: string = "Todd";
  constructor() {
    this.title = "Ultimate Angular";
  }
  /**
   * this function will handle input event
   * @param event content of event raised from input data
   */
  handleChange(value: string) {
    console.log(value);
    this.name = value;
  }
  /**
   * This function handle click event on button
   */
  handleClick() {
    this.name = "Motto";
  }
}

/***
 * Two way data Binding
 * 
 * This technically one way databinding
 *    <input
        type="text"
        [ngModel]="name"
        (ngModelChange)="handleChange($event)"
      />
* This is two way data binding
* <input type="text" [(ngModel)]="name" />
 */
