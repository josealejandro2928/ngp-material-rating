import { Component } from '@angular/core';
import { MatStarConfig } from 'ngp-material-rating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-package';
  rating: Number = 4.5;

  config1: MatStarConfig = {
    size: '22px',
    readOnly: false,
    stars: 5,
  };
}
