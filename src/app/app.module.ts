import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { HttpClientModule } from '@angular/common/http';
import { CuestionarioService } from './cuestionario/cuestionario.service';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { InstruccionesComponent } from './instrucciones/instrucciones.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ReporteService } from './reporte/reporte.service';
import { AgradecimientoComponent } from './agradecimiento/agradecimiento.component';
import { AgradecimientoService } from './agradecimiento/agradecimiento.service';
import { AnalisisComponent } from './analisis/analisis.component';
import { AnalisisService } from './analisis/analisis.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'instrucciones', component: InstruccionesComponent},
  {path: 'cuestionario/:usuario/:cuestionario', component: CuestionarioComponent},
  {path: 'reporte/:usuario/:cuestionario:', component: ReporteComponent},
  {path: 'analisis/:usuario/:cuestionario:', component: AnalisisComponent},
  {path: 'logout', component: AgradecimientoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CuestionarioComponent,
    LoginComponent,
    InstruccionesComponent,
    ReporteComponent,
    AgradecimientoComponent,
    AnalisisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    CuestionarioService,
    LoginService,
    ReporteService,
    AgradecimientoService,
    AnalisisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
