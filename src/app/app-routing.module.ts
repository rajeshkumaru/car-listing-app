import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsResolver } from './core/resolvers/car-details.resolver';
import { ListComponent } from './pages/list/list/list.component';
import { PageNotFoundComponent } from './shared/components/wildcard/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cars',
  },
  {
    path: 'cars',
    component: ListComponent,
  },
  {
    path: 'car/details/:id',
    loadChildren: () =>
      import('./pages/details/car-details/car-details-module').then(
        (module) => module.CarDetailsModule
      ),
    resolve: {
      carDetails: CarDetailsResolver,
    },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
