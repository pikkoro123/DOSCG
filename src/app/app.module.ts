import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EquationComponent } from './features/equation/equation.component';
import { GoogleMapComponent } from './features/google-map/google-map.component';
import { LineBotComponent } from './features/line-bot/line-bot.component';
import { MyCvComponent } from './features/my-cv/my-cv.component';
import { NumberSeriesComponent } from './features/number-series/number-series.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { ParticlesModule } from 'angular-particle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EquationComponent,
    GoogleMapComponent,
    LineBotComponent,
    MyCvComponent,
    NumberSeriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GoogleMapsModule,
    ParticlesModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
