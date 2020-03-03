import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProducsComponent } from './components/producs/producs.component';
import { ContactComponent } from './components/contact/contact.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'products', component: ProducsComponent},
      {path: 'contact', component: ContactComponent},
      {path: '**', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
