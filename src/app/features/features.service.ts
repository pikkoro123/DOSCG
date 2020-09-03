import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl;
const LINE_BACKEND_URL = environment.apiLineUrl;
@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  private lineBotUpdated = new Subject<{ message: string, results: {imagePath: string}}>();

  constructor(private http: HttpClient) { }

  // TODO: getValueNumberSeriesIndexs
  getValueNumberSeriesIndexs(xIndex: string, yIndex: string, zIndex: string) {
    const queryParams = `?index=[${xIndex},${yIndex},${zIndex}]`;
    return this.http.get<{ message: string; results: any }>(
      BACKEND_URL + '/series' + queryParams
    );
  }
  // TODO: getValueFromEquation
  getValueFromEquation(A: string) {
    const queryParams = `?a=${A}`;
    return this.http.get<{ message: string; results: any }>(
      BACKEND_URL + '/equation' + queryParams
    );
  }


  // TODO: getIsActiveLineBot

  getLineBotStatusListener() {
    return this.lineBotUpdated.asObservable();
  }

  getIsActiveLineBot() {
    this.http.get<{ message: string; results: any }>(
      LINE_BACKEND_URL
    ).subscribe(results => {
      this.lineBotUpdated.next(results);
    });
  }
}
