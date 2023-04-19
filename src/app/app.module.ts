import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { HttpClientModule } from '@angular/common/http';
import { CuestionarioService } from './cuestionario/cuestionario.service';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: '', component: CuestionarioComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CuestionarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    CuestionarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
