import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapPageComponent  } from './map-page/map-page.component';
import { CapitalListPageComponent} from './capital-list-page/capital-list-page.component';

const routes: Routes = [
  {path: 'capital-map', component: MapPageComponent },
  {path: 'capital-list', component: CapitalListPageComponent},
  {path: '', redirectTo:'/capital-map', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
