import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdsComponent } from './ads/ads.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  { path: 'ads.txt', component: AdsComponent, data: { hideNavbar: true } },
  // { path: 'proyectos', component: ProyectosComponent },
  // { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
