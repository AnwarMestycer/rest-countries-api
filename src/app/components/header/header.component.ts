import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  lightMode = 'hidden';
  darkMode = 'block';
  mode = 'Dark';

  switchMode() {
    if (this.lightMode == 'hidden') {
      this.darkMode = 'hidden';
      this.lightMode = 'block';
      this.mode = 'LIght';
    } else {
      this.lightMode = 'hidden';
      this.darkMode = 'block';
      this.mode = 'Dark';
    }
  }
}
