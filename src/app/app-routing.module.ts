import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminGuard } from './guardians/admin/admin.guard'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
      {path: 'productS', loadChildren: () => import('./components/productS/products.module').then(m => m.ProductsModule) },
      {path: 'contact', component: ContactComponent, canActivate: [AdminGuard]},
      {path: '**', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
