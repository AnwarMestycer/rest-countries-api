import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  countryName: string = '';
  selectedRegion: string = '';
  @Output() valueChanged = new EventEmitter<string>();
  @Output() region = new EventEmitter<string>()

  input() {
    this.valueChanged.emit(this.countryName);
  }

onChange()
{
  this.region.emit(this.selectedRegion);

}
}
