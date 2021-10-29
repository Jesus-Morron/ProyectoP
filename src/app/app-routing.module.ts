import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { HeladosComponent } from './paginas/helados/helados.component';
import { Info1Component } from './paginas/info1/info1.component';
import { Info2Component } from './paginas/info2/info2.component';
import { Info3Component } from './paginas/info3/info3.component';
import { InformacionComponent } from './paginas/informacion/informacion.component';
import { PrincipalComponent } from './paginas/principal/principal.component';

const routes:Routes=[
  {
    path:'principal', component: PrincipalComponent,
  },
  {
    path:'helados',
    component: HeladosComponent,
  },
  {
    path:'contactos',
    component: ContactosComponent,
  },
  {
    path:'informacion',
    component: InformacionComponent,
  },
 {
   path:'info1',
   component: Info1Component,
 },
 {
  path:'info2',
  component: Info2Component,
},
{
  path:'info3',
  component: Info3Component,
},
{
  path:'',
  redirectTo:'principal',
  pathMatch:'full',
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
