import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <h1>{{ title }}</h1>
      <img [src]="logo" />
      <br />
      <button (click)="handleClick(username.value)">Get Value</button>
      <input type="text" #username />
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
  handleClick(value: string) {
    console.log(value);
  }
}
