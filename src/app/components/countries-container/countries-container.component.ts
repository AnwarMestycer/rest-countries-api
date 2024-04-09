import { Component, Input, Output } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CountryComponent } from '../country/country.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-countries-container',
  standalone: true,
  imports: [SearchBarComponent, CountryComponent, HttpClientModule],
  templateUrl: './countries-container.component.html',
})
export class CountriesContainerComponent {
  countryName: string = '';
  region: string = ''

  constructor() {}
  
  onValueChanged(value: string) {
    this.countryName = value;
  }
  onSelectValue(region : string){
    this.region = region
  }
}
