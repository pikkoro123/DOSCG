import { Component, OnInit } from '@angular/core';

// import {  } from '../../../pictures';

@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.css']
})
export class MyCvComponent implements OnInit {
  myPic = 'assets/images/itsme.JPG';
  myPicTitle = 'Pallop Bunnak';
  constructor() { }

  ngOnInit(): void {
  }

}
