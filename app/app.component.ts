import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      {{ title }}
    </div>
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

  constructor() {
    this.title = "Ultimate Angular"; /// Set property value.
  }
}
