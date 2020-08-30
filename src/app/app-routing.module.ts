import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquationComponent } from './features/equation/equation.component';
import { GoogleMapComponent } from './features/google-map/google-map.component';
import { LineBotComponent } from './features/line-bot/line-bot.component';
import { MyCvComponent } from './features/my-cv/my-cv.component';
import { NumberSeriesComponent } from './features/number-series/number-series.component';

const routes: Routes = [
 { path: '', component: MyCvComponent },
 { path: 'equation', component: EquationComponent },
 { path: 'googlemap', component: GoogleMapComponent },
 { path: 'linebot', component: LineBotComponent },
 { path: 'numberseries', component: NumberSeriesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
