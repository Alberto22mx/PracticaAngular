import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ColorsDirective } from './directives/colors/colors.directive';
import { CuadradoPipe } from './pipes/cuadrado/cuadrado.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ColorsDirective,
    CuadradoPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ColorsDirective,
    CuadradoPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
