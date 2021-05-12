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
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)"
      />
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
   * This function updates name property with value passed in event.terget.value
   * @param event content of event raised on blur
   */
  handleBlur(event: any) {
    //console.log(event);
    console.log(event.target.value);
    this.name = event.target.value;
  }
  /**
   * this function will handle input event
   * @param event content of event raised from input data
   */
  handleInput(event: any) {
    console.log(event.target.value);
    this.name = event.target.value;
  }
  /**
   * This function handle click event on button
   */
  handleClick() {
    this.name = "Motto";
  }
}

/***
 * Event Binding
 * Example of event raised on blur, input or click on button
 *
 */
