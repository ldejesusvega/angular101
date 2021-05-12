import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <h1>{{ title }}</h1>
      <img [src]="logo" />
      <br />
      <input type="text" value="Todd" />
      <input type="text" value="{{ title }}" />
      <input type="text" [value]="name" />
    </div>
  `, // example of sugar notation <h1 [innerHTML]="title"></h1>
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
}

/***
 *  <input type="text" value="Todd" />
    <input type="text" value="{{ title }}" />
 * This two lines shows input with value Todd,
 * but in second line is binding with {{ title }}
 * To do this dynamic binding should do it like this 
 * 
 * Create the property the bind on input with new property 
 *  name: string = "Todd";
 *  <input type="text" [value]="name" />
 * This is one way databinding 
 * 
 */
