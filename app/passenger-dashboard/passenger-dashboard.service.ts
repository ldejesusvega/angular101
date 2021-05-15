import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Passenger } from "./modules/passenger.interface";

const PASSENGER_API: string = "/api/passengers";

// Add this Injectable, so we can inject http services in the contructor
@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  /**
   * this services get all passengers
   * @returns Passenger[]
   */
  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  /**
   * This method implements update operation using PUT http verb
   * @param passenger Type of Passenger
   * @returns json object
   */
  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    let options = new RequestOptions({
      headers: headers,
    });
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  /**
   * This method implements delete operation on passengers list
   * using delete http verb
   * @param passenger Type of passenger
   * @returns Json Object
   */
  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}
