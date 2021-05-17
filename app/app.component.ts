import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <!-- <passenger-viewer></passenger-viewer> -->
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
