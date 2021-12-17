# NgpMaterialRating

Angular Library that uses material design icons for editing and showing rating variables.
This library was generated with Angular CLI version 10.0.0.

### Installation

```sh
npm i ngp-material-rating --save
```

`NgpMaterialRating` requires [Angular Material](https://material.angular.io/guide/getting-started/).
For angular version 8 or higher projects

```sh
ng add @angular/material
```

Importing the BrowserAnimationsModule into your application enables Angular's animation system. Declining this will disable most of Angular Material's animations.

### Usages

You must import the module `NgpMaterialRatingModule` where you will use it and use the component

```typescript
***
import { NgpMaterialRatingModule } from 'ngp-material-rating';
@NgModule({
  ***
  imports: [
    NgpMaterialRatingModule,
  ],
****
})
```

In your component:

```html
<ngp-material-rating [value]="rating"> </ngp-material-rating>
```

In .ts file

```typescript
export class ExampleComponent {
  rating = 4.5;
}
```

![Image Rating](https://movie-seat-booking-js.surge.sh/rating-image-1.PNG)

### More configuration

The `NgpRatingMaterialComponent` component has a setting to change icon size, fill color, mode (read-only), maximum number of icons, presentation tags, and an option to put a clear button online. The interface look like this:

```typescript
export interface MatStarConfig {
  size?: string;
  colorFill?: string;
  label?: string;
  readOnly?: boolean;
  showNumber?: boolean;
  showClearBtn?: boolean;
  stars?: number;
}
```

### More examples

```typescript
export class AppComponent {
  title = "ngp-material-rating-test";
  rating = 3.5;
  ratingForm = new FormControl(2.5, [Validators.required]);

  config1: MatStarConfig = {
    size: "22px",
    readOnly: true,
    colorFill: "#fa4508",
    stars: 20,
  };

  config2: MatStarConfig = {
    size: "36px",
    readOnly: false,
    showClearBtn: true,
    showNumber: true,
  };
}
```

```html
<ngp-material-rating [config]="this.config1" [(ngModel)]="rating">
</ngp-material-rating>
<ngp-material-rating [config]="this.config2" [formControl]="ratingForm">
</ngp-material-rating>
```

![Image Rating](https://movie-seat-booking-js.surge.sh/rating-image-2.PNG)
