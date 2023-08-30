import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    MainComponent,
    FooterComponent,
    SobreNosotrosComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
