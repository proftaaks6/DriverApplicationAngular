import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { PointSquareComponent } from './point-square/point-square.component';
import {IndexRoutingModule} from './index-routing.module';

@NgModule({
  declarations: [IndexComponent, PointSquareComponent],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
