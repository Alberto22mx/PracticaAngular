import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProducsComponent } from './components/producs/producs.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { ColorsDirective } from './directives/colors.directive';
import { CuadradoPipe } from './pipes/cuadrado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProducsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    ColorsDirective,
    CuadradoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
