import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit, AfterViewInit {
  // title = 'google-api-angular-spanish';

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  fromPlace: string = 'MRT บางซื่อ ประตู 2 บริษัทปูนซีเมนต์ไทย';
  toPlace: string = 'Central World, Centara Grand and Bangkok Convention Centre, Rama I Road, Pathum Wan, Pathum Wan District, Bangkok';
  travel = 'DRIVING';
  travels = [
    'DRIVING',
    'BICYCLING',
    'TRANSIT',
    'TWO_WHEELER',
    'WALKING'
    // google.maps.TravelMode.DRIVING,
    // google.maps.TravelMode.BICYCLING,
    // google.maps.TravelMode.TRANSIT,
    // google.maps.TravelMode.TWO_WHEELER,
    // google.maps.TravelMode.WALKING
  ];

  map: google.maps.Map;

  // lat = 40.730610;
  // lng = -73.935242;
  // lat = -34.681;
  // lng = -58.371;
  lat = 13.8028793;
  lng = 100.5368949;
  // 13.8028793,100.5368949 บางซื่อ mrt

  // central world
  // lat = 13.7466356;
  // lng = 100.5371464;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 13,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  form = new FormGroup({
    fromPlace: new FormControl(this.fromPlace, [
      Validators.required
    ]),
    toPlace: new FormControl(this.toPlace, [
      Validators.required
    ]),
    travel: new FormControl(this.travel, [
      Validators.required
    ])
  });

  ngOnInit(): void {

  }

  get f() {
    return this.form.controls;
  }

  submit(): void {
    console.log('submit...');
    if (this.form.invalid) {
      return;
    }

    this.calculateAndDisplayRoute(this.form.value.fromPlace, this.form.value.toPlace, this.form.value.travel);
    /*this.featuresService.getValueFromEquation(
      this.form.value.valueA
    ).subscribe(resultValues => {
      this.A = resultValues.results.A;
      this.B = resultValues.results.B;
      this.C = resultValues.results.C;
    });*/

  }

  calculateAndDisplayRoute(fromPlace: string, toPlace: string, travel: string): void {
    this.directionsService.route({
      // origin: 'chicago, il',
      // destination: 'los angeles, ca',
      origin: fromPlace,
      destination: toPlace,
      travelMode: this.getTypeTravel(travel)
    }, (response, status) => {
      if (status === 'OK') {
        console.log(response);
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  getTypeTravel(travel: string) {
    switch (travel) {
      case 'DRIVING': {
        return google.maps.TravelMode.DRIVING;
      }
      case 'BICYCLING': {
        return google.maps.TravelMode.BICYCLING;
      }
      case 'TRANSIT': {
        return google.maps.TravelMode.TRANSIT;
      }
      case 'TWO_WHEELER': {
        return google.maps.TravelMode.TWO_WHEELER;
      }
      case 'WALKING': {
        return google.maps.TravelMode.WALKING;
      }
      default: {
        return null;
      }
    }
  }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement,
    this.mapOptions);
  }

  ngAfterViewInit(): void {
    this.mapInitializer();
    // this.marker.setMap(this.map);
    this.calculateAndDisplayRoute(this.fromPlace, this.toPlace, this.travel);
    this.directionsDisplay.setMap(this.map);
  }

}
