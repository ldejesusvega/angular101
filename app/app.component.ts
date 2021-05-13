import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <h1>{{ title }}</h1>
      <img [src]="logo" />
      <br />
      <input
        type="text"
        [value]="name"
        (input)="handleChange($event.target.value)"
      />
      <br />

      <template [ngIf]="name.length > 3">
        <div>searching from template... {{ name }}</div>
      </template>

      <!-- Angular Structural Directive -->
      <div *ngIf="name.length > 2">searching for... {{ name }}</div>
      <div *ngIf="name.length">searching nolenght {{ name }}</div>
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
  handleChange(value: string) {
    console.log(value);
    this.name = value;
  }
}
