import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FeaturesService } from '../features.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent implements OnInit {

  indexX;
  indexY;
  indexZ;

  valueX = '0';
  valueY = '0';
  valueZ = '0';
  results = 'Output => X = , Y = , Z = ';
  indexsForm = new FormGroup({});

  constructor(public featuresService: FeaturesService) { }

  ngOnInit(): void {
    // TODO: ใส่ Listener
    this.getInterpretations();
    this.initForm();
    this.featuresService.getValueNumberSeriesIndexs(
      this.indexsForm.value.indexX,
      this.indexsForm.value.indexY,
      this.indexsForm.value.indexZ
    ).subscribe(resultValues => {
      // console.log('result..');
      this.valueX = resultValues.results.x;
      this.valueY = resultValues.results.y;
      this.valueZ = resultValues.results.z;
      // console.log(this.results);
    });
  }

  initForm() {
    this.indexsForm = new FormGroup({
      indexX: new FormControl(this.indexX, [
        Validators.required,
        Validators.pattern('^[0-9]*$')
        // Validators.minLength(4),
        // forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      indexY: new FormControl(this.indexY, [Validators.required, Validators.pattern('^[0-9]*$')]),
      indexZ: new FormControl(this.indexZ, [Validators.required, Validators.pattern('^[0-9]*$')])
    });
  }

  getInterpretations() {
    console.log('getInterpretations...');
    if(localStorage.getItem('indexX') === null) {
      localStorage.setItem('indexX', '0');
      this.indexX = localStorage.getItem('indexX');
      localStorage.setItem('indexY', '1');
      this.indexY = localStorage.getItem('indexY');
      localStorage.setItem('indexZ', '6');
      this.indexZ = localStorage.getItem('indexZ');
    } else {
      this.indexX = localStorage.getItem('indexX');
      this.indexY = localStorage.getItem('indexY');
      this.indexZ = localStorage.getItem('indexZ');
    }
  }

  setInterpretations(indexX, indexY, indexZ) {
    console.log('setInterpretations...');
    localStorage.setItem('indexX', indexX);
    localStorage.setItem('indexY', indexY);
    localStorage.setItem('indexZ', indexZ);
  }

  get f() {
    return this.indexsForm.controls;
  }

  submit(): void {
    console.log('submit...');
    if (this.indexsForm.invalid) {
      return;
    }

    this.indexX = this.indexsForm.value.indexX;
    this.indexY = this.indexsForm.value.indexY;
    this.indexZ = this.indexsForm.value.indexZ;
    this.setInterpretations( this.indexX, this.indexY, this.indexZ );
    this.featuresService.getValueNumberSeriesIndexs(
      this.indexsForm.value.indexX,
      this.indexsForm.value.indexY,
      this.indexsForm.value.indexZ
    ).subscribe(resultValues => {
      // this.valueX = "0";
      console.log('result..');
      // console.log(resultValues['results']['x'] +);
      this.valueX = resultValues.results.x;
      this.valueY = resultValues.results.y;
      this.valueZ = resultValues.results.z;
      console.log(this.results);
    });

  }
}
