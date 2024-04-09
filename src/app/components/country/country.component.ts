import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './country.component.html',
})
export class CountryComponent implements OnInit {
  constructor(private countryService: CountryService) {}
  @Input() countryName: string = '';
  @Input() region: string = '';
  countryExist: Boolean = false;

  countries: any;
  ngOnInit() {
    this.countryService.getAllCountriesService().subscribe((response) => {
      this.countries = response;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['countryName']) {
      this.countryService
        .getByNameService(this.countryName)
        .subscribe((response) => {
          this.countries = response;
        });
    }
    console.log(changes["region"])
    if (changes['region']) {
      this.countryService
        .getByRegionService(this.region)
        .subscribe((response) => {
          this.countries = response;
        });
    }
  }
}
