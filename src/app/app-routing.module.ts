import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'page', pathMatch: 'full' },
  { path: 'page', loadChildren: () => import('./page/page.module').then(m => m.PageModule) },
  // { path: 'warehouse', component: MapComponent},
  // { path: 'drivers', component: MapComponent},
  // { path: 'markets', component: MapComponent},
  // { path: 'trucks', component: MapComponent},
  // { path: 'suppliers', component: MapComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
