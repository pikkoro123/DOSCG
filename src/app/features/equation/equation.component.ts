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

  A;
  B;
  C;

  form = new FormGroup({});

  constructor(public featuresService: FeaturesService) { }

  ngOnInit(): void {
    // TODO: ใส่ Listener
    this.getInterpretations();
    this.initForm();
    if( localStorage.getItem('A') === null &&
      localStorage.getItem('B') === null &&
      localStorage.getItem('C') === null ) {
        console.log('get api...')
        this.featuresService.getValueFromEquation(
          this.form.value.valueA
        ).subscribe(resultValues => {
          this.A = this.form.value.valueA;
          this.B = resultValues.results.B;
          this.C = resultValues.results.C;
          this.setInterpretations(this.A, this.B, this.C);
        });
      } else {
        console.log('get local storage...')
        this.A = localStorage.getItem('A');
        this.B = localStorage.getItem('B');
        this.C = localStorage.getItem('C');
      }
  }

  initForm() {
    this.form = new FormGroup({
      valueA: new FormControl(this.A, [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ])
    });
  }

  getInterpretations() {
    console.log('getInterpretations...');
    if(localStorage.getItem('A') === null) {
      localStorage.setItem('A', '21');
      this.A = localStorage.getItem('A');
    } else {
      this.A = localStorage.getItem('A');
    }
  }

  setInterpretations(A, B, C) {
    console.log('setInterpretations...');
    localStorage.setItem('A', A);
    localStorage.setItem('B', B);
    localStorage.setItem('C', C);
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
      this.A = this.form.value.valueA;
      this.B = resultValues.results.B;
      this.C = resultValues.results.C;
      this.setInterpretations(this.A, this.B, this.C);
    });

  }
}
