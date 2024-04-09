import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}
  getAllCountriesService(): Observable<any> {
    let countries = this.http.get<any>('https://restcountries.com/v3.1/all');
    return countries;
  }

  getByNameService(name: string): Observable<any> {
    let country = this.http.get<any>(
      `https://restcountries.com/v3.1/name/${name}`
    );
    return country;
  }

  getByRegionService(selectedRegion: string): Observable<any> {
    let region = this.http.get<any>(`https://restcountries.com/v3.1/region/${selectedRegion}`);
    return region;
  }

}
