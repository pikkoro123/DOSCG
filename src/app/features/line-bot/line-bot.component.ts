import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../features.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-line-bot',
  templateUrl: './line-bot.component.html',
  styleUrls: ['./line-bot.component.css']
})
export class LineBotComponent implements OnInit {

  message;
  botName = 'Pikkoro';
  qrcodePic;
  isLoading = false;
  private lineBotSub: Subscription;

  constructor(public featuresService: FeaturesService) { }

  ngOnInit(): void {
    if ( localStorage.getItem('qrcodePic') == null ) {
      this.isLoading = true;
      this.featuresService.getIsActiveLineBot();
      this.lineBotSub = this.featuresService.getLineBotStatusListener().subscribe(resultValue => {
        this.isLoading = false;
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
