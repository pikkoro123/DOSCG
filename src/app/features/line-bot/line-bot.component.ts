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
  qrcodePic = '';
  constructor(public featuresService: FeaturesService) { }

  ngOnInit(): void {
    this.featuresService.getIsActiveLineBot().subscribe(resultValue => {
      console.log(resultValue);
      this.message = resultValue.message;
      this.qrcodePic = resultValue.results.imagePath;
    });
  }

}
