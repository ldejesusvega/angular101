import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      {{ title }}
    </div>
  `, // inline template definition
})
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
