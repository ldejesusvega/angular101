/***
 *  Output, EventEmitter are imported to implement events that notify parent components
 */
import {
  Component,
  OnChanges,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { Passenger } from "../../modules/passenger.interface";
@Component({
  selector: "passenger-detail",
  styleUrls: ["passenger-detail.component.scss"],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      <!-- 
        usando ngIf permite definir que codigo se muestra 
        se agrega evento _input_ para registrar el cambio en el nombre      
      -->
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name
        />
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
      <div class="date">
        Checked In Date :
        {{
          detail.checkInDate
            ? (detail.checkInDate | date: "yMMMMd" | uppercase)
            : "Not Checked Id"
        }}
      </div>
      <div class="children">Children: {{ detail.children?.length || 0 }}</div>
      <!-- se agrega el evento para editar -->
      <button (click)="toggleEdit()">
        {{ editing ? "Done" : "Edit" }}
      </button>
      <!-- se agrega el evento para remover -->
      <button (click)="onRemove()">Remove</button>
    </div>
  `,
})
export class PassengerDetailComponent implements OnChanges, OnInit {
  @Input()
  detail: Passenger;
  editing: boolean = false;

  /**
   * This is output method creates a new EventEmitter
   * remove or edit that will notify the upper component
   */
  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  constructor() {}
  ngOnChanges(changes) {
    console.log("onChanges");
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  ngOnInit() {
    console.log("onInit");
  }

  /**
   * onNameChange capture changes on input
   */
  onNameChange(value: string) {
    console.log("fullname before : ", this.detail.fullname);
    console.log("Value:", value);
    this.detail.fullname = value;
    console.log("fullname after : ", this.detail.fullname);
  }

  /**
   * toggleEdit captures Edit event and validate editing property
   * to fire up event and pass detail as parameter
   * usign this.edit.emit(this.detail);
   */
  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
    console.log("Editing Value", this.editing);
  }
  /**
   * this onRTemove Notify parent component when this
   * event has been fire up passing this.detail as event parameter
   */
  onRemove() {
    this.remove.emit(this.detail);
  }
}
