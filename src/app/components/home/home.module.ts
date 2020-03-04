import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
    declarations: [
        SliderComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        SharedModule
    ]
})
export class HomeModule { }
