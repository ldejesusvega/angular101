import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
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
      .map((response: Response) => response.json());
  }
}
