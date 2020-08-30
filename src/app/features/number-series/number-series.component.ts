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

  indexX = '0';
  indexY = '1';
  indexZ = '6';

  valueX = '0';
  valueY = '0';
  valueZ = '0';

  indexsForm = new FormGroup({
    indexX: new FormControl(this.indexX, [
      Validators.required,
      Validators.pattern('^[0-9]*$')
      // Validators.minLength(4),
      // forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    ]),
    indexY: new FormControl(this.indexY, [Validators.required, Validators.pattern('^[0-9]*$')]),
    indexZ: new FormControl(this.indexZ, [Validators.required, Validators.pattern('^[0-9]*$')])
  });

  constructor(public featuresService: FeaturesService) { }

  ngOnInit(): void {
  }

  get f() {
    return this.indexsForm.controls;
  }

  submit(): void {
    console.log('submit...');
    if (this.indexsForm.invalid) {
      return;
    }

    this.featuresService.getValueNumberSeriesIndexs(
      this.indexsForm.value.indexX,
      this.indexsForm.value.indexY,
      this.indexsForm.value.indexZ
    ).subscribe(resultValues => {
      // this.valueX = "0";
      console.log('result..');
      console.log(resultValues);
    });

  }
}
