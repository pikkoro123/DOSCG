import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../features.service';

@Component({
  selector: 'app-line-bot',
  templateUrl: './line-bot.component.html',
  styleUrls: ['./line-bot.component.css']
})
export class LineBotComponent implements OnInit {

  message;
  botName = 'Pikkoro';
  qrcodePic;
  constructor(public featuresService: FeaturesService) { } 

  ngOnInit(): void {
    if(localStorage.getItem('qrcodePic') == null) {
      this.featuresService.getIsActiveLineBot().subscribe(resultValue => {
        console.log(resultValue);
        this.message = resultValue.message;
        this.qrcodePic = resultValue.results.imagePath;
        this.setInterpretations(this.message, this.qrcodePic);
      });
    } else {
      this.getInterpretations();
    }
  }

  getInterpretations() {
    console.log('getInterpretations...');
    this.message = localStorage.getItem('message');
    this.qrcodePic = localStorage.getItem('qrcodePic');
  }

  setInterpretations(message, qrcodePic) {
    console.log('setInterpretations...');
    localStorage.setItem('message', message);
    localStorage.setItem('qrcodePic', qrcodePic);
  }

}
