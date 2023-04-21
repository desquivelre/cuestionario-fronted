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

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'instrucciones', component: InstruccionesComponent},
  {path: 'cuestionario', component: CuestionarioComponent},
  {path: 'cuestionario/:usuario/:cuestionario', component: CuestionarioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CuestionarioComponent,
    LoginComponent,
    InstruccionesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    CuestionarioService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
