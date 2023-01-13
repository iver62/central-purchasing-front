import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { MaterialModule } from '../material.module';
import { MapComponent } from './map/map.component';
import { PageRoutingModule } from './page-routing.module';
import { WarehouseComponent } from './warehouse/warehouse.component';

@NgModule({
  declarations: [
    MapComponent,
    PageComponent,
    WarehouseComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PageRoutingModule
  ]
})
export class PageModule { }
