import { NgpMaterialRatingComponent } from './ngp-material-rating.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [NgpMaterialRatingComponent],
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  exports: [NgpMaterialRatingComponent],
})
export class NgpMaterialRatingModule {}
