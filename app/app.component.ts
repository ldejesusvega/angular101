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
      <button (click)="handleClick(username.value)">Get Value</button>
      <input type="text" #username />
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
   * This function handle click event on button
   */
  handleClick(value: string) {
    console.log(value);
  }
}

/***
 * Template Refs
 *
 */
