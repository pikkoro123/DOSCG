import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FeaturesService } from '../features.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  A = 21;
  B = 0;
  C = 0;

  form = new FormGroup({
    valueA: new FormControl(this.A, [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ])
  });

  constructor(public featuresService: FeaturesService) { }

  ngOnInit(): void {
    // TODO: ใส่ Listener
    this.featuresService.getValueFromEquation(
      this.form.value.valueA
    ).subscribe(resultValues => {
      this.A = resultValues.results.A;
      this.B = resultValues.results.B;
      this.C = resultValues.results.C;
    });
  }

  get f() {
    return this.form.controls;
  }

  submit(): void {
    console.log('submit...');
    if (this.form.invalid) {
      return;
    }

    this.featuresService.getValueFromEquation(
      this.form.value.valueA
    ).subscribe(resultValues => {
      this.A = resultValues.results.A;
      this.B = resultValues.results.B;
      this.C = resultValues.results.C;
    });

  }
}
