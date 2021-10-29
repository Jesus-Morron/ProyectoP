import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { SeccionComponent } from './componentes/seccion/seccion.component';
import { PieComponent } from './componentes/pie/pie.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { HeladosComponent } from './paginas/helados/helados.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { InformacionComponent } from './paginas/informacion/informacion.component';
import { ScontComponent } from './componentes/scont/scont.component';
import { SinfoComponent } from './componentes/sinfo/sinfo.component';
import { Info1Component } from './paginas/info1/info1.component';
import { Info2Component } from './paginas/info2/info2.component';
import { Info3Component } from './paginas/info3/info3.component';
import { If1Component } from './componentes/if1/if1.component';
import { If2Component } from './componentes/if2/if2.component';
import { If3Component } from './componentes/if3/if3.component';
import { HeadComponent } from './componentes/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SeccionComponent,
    PieComponent,
    PrincipalComponent,
    HeladosComponent,
    ContactosComponent,
    InformacionComponent,
    ScontComponent,
    SinfoComponent,
    Info1Component,
    Info2Component,
    Info3Component,
    If1Component,
    If2Component,
    If3Component,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
