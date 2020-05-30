import { Component } from '@angular/core';
import { GeolocationService } from './services/geolocation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'weatherapp';

  constructor(private geolocationService : GeolocationService){}

  ngOnInit(){
    
  }
}
