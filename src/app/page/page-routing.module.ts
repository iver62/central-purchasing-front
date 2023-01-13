import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers/drivers.component';
import { MapComponent } from './map/map.component';
import { PageComponent } from './page.component';
import { TrucksComponent } from './trucks/trucks.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

const routes: Routes = [
  {
    path: '', component: PageComponent,
    children: [
      { path: '', redirectTo: 'map', pathMatch: 'full' },
      { path: 'map', component: MapComponent },
      { path: 'warehouse', component: WarehouseComponent },
      { path: 'drivers', component: DriversComponent },
      { path: 'markets', component: MapComponent },
      { path: 'trucks', component: TrucksComponent },
      { path: 'suppliers', component: MapComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageRoutingModule { }
