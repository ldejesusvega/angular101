import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      {{ title }}
    </div>
    <h4>Interpolation Examples</h4>
    <div>NumberOne is {{ numberOne }}</div>
    <div>NumberTwo is {{ numberTwo }}</div>

    <h4>Interpolation Calculations</h4>
    <div>Sum numbers is {{ numberOne + numberTwo }}</div>

    <h4>Interpolation with Boolean Values</h4>
    <div>is Happy??? {{ isHappy ? ":)" : ":(" }}</div>

    <h4>Concat expression</h4>
    {{ title + " !!!" }}
  `,
}) // templateUrl: "./app.component.html", // external template definition
export class AppComponent {
  /**
 * This Component cas be contruct like this ....
 * 
 *   constructor() {
    this.groceries = [];
  }
  But in this case usign type script this will change to ...
 **/

  title: string; // declaring property then...
  isHappy: boolean = false;
  numberOne: number = 1;
  numberTwo: number = 2;

  constructor() {
    this.title = "Ultimate Angular"; /// Set property value.
  }
}
