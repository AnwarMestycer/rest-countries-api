import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  lightMode: string = 'hidden';
  darkMode: string = 'block';
  mode: string = 'Dark';
  background: string = '';
  textColor: string = '';

  switchMode() {
    if (this.lightMode == 'hidden') {
      this.darkMode = 'hidden';
      this.lightMode = 'block';
      this.mode = 'Light';
      this.background = '#ffffff';
      this.textColor = '#000000';
    } else {
      this.background = '#202c37';
      this.textColor = '#ffffff';
      this.lightMode = 'hidden';
      this.darkMode = 'block';
      this.mode = 'Dark';
    }
  }
}
