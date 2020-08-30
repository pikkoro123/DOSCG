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
    return this.http.get<{x: string, y: string, z: string}>(
      BACKEND_URL + '/series' + queryParams
    );
  }
  // TODO: getValueFromEquation

  // TODO: getIsActiveLineBot
}
