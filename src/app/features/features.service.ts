import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

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
  getIsActiveLineBot() {
    return this.http.get<{ message: string; results: any }>(
      'https://linebot-pikkoro.herokuapp.com'
    );
  }
  // https://linebot-pikkoro.herokuapp.com/
}
