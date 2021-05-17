import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../modules/passenger.interface";
import { Baggage } from "../../modules/baggage.interface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template: `
    <form
      (ngSubmit)="handleSubmit(form.value, form.valid)"
      #form="ngForm"
      novalidate
    >
      <div>
        Passenger Fullname :
        <input
          type="text"
          name="fullname"
          [ngModel]="detail?.fullname"
          #fullname="ngModel"
          required
        />
        <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
          Passenger Name_ is_ required
        </div>
      </div>
      <div>
        Passenger ID :
        <input
          type="number"
          name="id"
          [ngModel]="detail?.id"
          #id="ngModel"
          required
        />
        <div *ngIf="id.errors?.required && fullname.dirty" class="error">
          Passenger ID_ is_ required
        </div>
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
        Check in date:
        <input
          type="number"
          name="checkInDate"
          [ngModel]="detail?.checkInDate"
        />
      </div>

      <div>
        Luggage
        <select name="baggage" [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage"
          >
            {{ item.value }}
          </option>
        </select>
      </div>

      <button type="submit" [disabled]="form.invalid">Update Passenger</button>
    </form>
  `,
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [
    {
      key: "none",
      value: "No Baggage",
    },
    {
      key: "hand-only",
      value: "Hand Baggage",
    },
    {
      key: "hold-only",
      value: "Hold Baggage",
    },
    {
      key: "hand-hold",
      value: "Hand and Hold Baggage",
    },
  ];

  toggleChechIk(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
}
