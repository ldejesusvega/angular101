import { Component, Input } from "@angular/core";
import { Passenger } from "../../modules/passenger.interface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template: `
    <form #form="ngForm" novalidate>
      form!!
      {{ detail | json }}
      <div>
        Passenger F0ullname :
        <input type="text" name="fullname" [ngModel]="detail?.fullname" />
      </div>
      <div>
        Passenger ID : <input type="number" name="id" [ngModel]="detail?.id" />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleChechIk($event)"
          />
        </label>
      </div>

      <div *ngIf="form.value.checkedIn">
        Check_ in_ date_:
        <input
          type="number"
          name="checkInDate"
          [ngModel]="detail?.checkInDate"
        />
      </div>

      {{ form.value | json }}
    </form>
  `,
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;
  toggleChechIk(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }
}
