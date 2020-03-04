import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        SliderComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule
    ]
})
export class HomeModule{

}