import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { DetalleCuestionario } from './detallecuestionario';
import { ReporteService } from './reporte.service';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent{

  public ccuestionario: Number;
  public cusuario: Number;

  public detallecuestionarios: DetalleCuestionario[];
  public arrnumber: Number[];

  public showreporte: Boolean;

  public nicolor: any;
  public picolor: any;
  public licolor: any;
  public ficolor: any;

  public idam2 : String;
  public prat2 : String;
  public prip1 : String;
  public prpt4 : String;
  public deae1 : String;
  public deae5 : String;
  public decm1 : String;
  public rsco1 : String;
  public rsmi2 : String;

  public tempidam2: Number;
  public tempprat2: Number;
  public tempprip1: Number;
  public tempprpt4: Number;
  public tempdeae1: Number;
  public tempdeae5: Number;
  public tempdecm1: Number;
  public temprsco1: Number;
  public temprsmi2: Number;

  constructor(private reporteService: ReporteService, private activatedRoute: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit(): void {

    this.showreporte = false;

    this.nicolor = 'rgb(255, 99, 132)';
    this.picolor = 'rgb(245, 149, 66)';
    this.licolor = 'rgb(245, 227, 66)';
    this.ficolor = 'rgb(53, 204, 78)';

    this.activatedRoute.params.subscribe(params=>{
      this.cusuario = Number(params['usuario']);
      this.ccuestionario = Number(params['cuestionario']);
    });

    this.ccuestionario = 1;

    this.beforereporte(this.ccuestionario, this.cusuario);
   
    setTimeout(() => {
      this.reporte();
    }, 500);
    
  }

  beforereporte(ccuestionario:Number, cusuario:Number){
    this.reporteService.getDetalleCuestionarios2(ccuestionario, cusuario).subscribe(
      (response) => {
        this.detallecuestionarios = response;
      },err=>{
        alert("Lista detallecuestionario no identificado")
       }
    );

  }

  reporte(){

    this.showreporte = true;

    let ni = 0;
    let pi = 0;
    let li = 0;
    let fi = 0;

    let mil1 = false;
    let mil2 = false;
    let mil3 = false;

    setTimeout(() => {

      // ID.AM-2

      // CHART 31
      
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "ID.AM-2" && detallecuestionario.pregunta.preguntamil == "MIL1"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart31 = new Chart(
        "chart31", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      // CHART 21

      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "ID.AM-2" && detallecuestionario.pregunta.preguntamil == "MIL2"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil2 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil2 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart21 = new Chart(
        "chart21", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      // CHART 11

      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "ID.AM-2" && detallecuestionario.pregunta.preguntamil == "MIL3"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil3 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil3 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);

      const chart11 = new Chart(
        "chart11", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true,
          }
        }
      );

      if(mil1 == true){
        this.idam2 = "MIL 0";
      }

      if(mil3 == true && mil2 == true && mil1 == false){
        this.idam2 = "MIL 1";
      }

      if(mil3 == true && mil2 == false && mil1 == false){
        this.idam2 = "MIL 2";
      }

      if(mil3 == false && mil2 == false && mil1 == false){
        this.idam2 = "MIL 3";
      }

      if(mil3 == false && mil2 == true && mil1 == false){
        this.idam2 = "MIL 1";
      }

      mil1 = false;
      mil2 = false;
      mil3 = false;

      // PR.AT-2

      // CHART 32
      
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "PR.AT-2" && detallecuestionario.pregunta.preguntamil == "MIL1"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart32 = new Chart(
        "chart32", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      // CHART 22
      
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "PR.AT-2" && detallecuestionario.pregunta.preguntamil == "MIL2"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil2 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil2 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart22 = new Chart(
        "chart22", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      // CHART 12

      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "PR.AT-2" && detallecuestionario.pregunta.preguntamil == "MIL3"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil3 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil3 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);

      const chart12 = new Chart(
        "chart12", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      if(mil1 == true){
        this.prat2 = "MIL 0";
      }

      if(mil3 == true && mil2 == true && mil1 == false){
        this.prat2 = "MIL 1";
      }

      if(mil3 == true && mil2 == false && mil1 == false){
        this.prat2 = "MIL 2";
      }

      if(mil3 == false && mil2 == false && mil1 == false){
        this.prat2 = "MIL 3";
      }

      if(mil3 == false && mil2 == true && mil1 == false){
        this.prat2 = "MIL 1";
      }

      mil1 = false;
      mil2 = false;
      mil3 = false;


      // PR.IP-1

      // CHART 33
      
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "PR.IP-1" && detallecuestionario.pregunta.preguntamil == "MIL1"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart33 = new Chart(
        "chart33", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      // CHART 23
      
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "PR.IP-1" && detallecuestionario.pregunta.preguntamil == "MIL2"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil2 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil2 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart23 = new Chart(
        "chart23", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      // CHART 13

      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "PR.IP-1" && detallecuestionario.pregunta.preguntamil == "MIL3"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil3 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil3 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart13 = new Chart(
        "chart13", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      if(mil1 == true){
        this.prip1 = "MIL 0";
      }

      if(mil3 == true && mil2 == true && mil1 == false){
        this.prip1 = "MIL 1";
      }

      if(mil3 == true && mil2 == false && mil1 == false){
        this.prip1 = "MIL 2";
      }

      if(mil3 == false && mil2 == false && mil1 == false){
        this.prip1 = "MIL 3";
      }

      if(mil3 == false && mil2 == true && mil1 == false){
        this.prip1 = "MIL 1";
      }

      mil1 = false;
      mil2 = false;
      mil3 = false;

      // PR.PT-4

      // CHART 34
      
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "PR.PT-4" && detallecuestionario.pregunta.preguntamil == "MIL1"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart34 = new Chart(
        "chart34", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      // CHART 24
      
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "PR.PT-4" && detallecuestionario.pregunta.preguntamil == "MIL2"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil2 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil2 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart24 = new Chart(
        "chart24", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      // CHART 14

      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "PR.PT-4" && detallecuestionario.pregunta.preguntamil == "MIL3"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil3 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil3 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart14 = new Chart(
        "chart14", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      if(mil1 == true){
        this.prpt4 = "MIL 0";
      }

      if(mil3 == true && mil2 == true && mil1 == false){
        this.prpt4 = "MIL 1";
      }

      if(mil3 == true && mil2 == false && mil1 == false){
        this.prpt4 = "MIL 2";
      }

      if(mil3 == false && mil2 == false && mil1 == false){
        this.prpt4 = "MIL 3";
      }

      if(mil3 == false && mil2 == true && mil1 == false){
        this.prpt4 = "MIL 1";
      }

      if(mil3 == false && mil2 == true && mil1 == false){
        this.prpt4 = "MIL 1";
      }

      mil1 = false;
      mil2 = false;
      mil3 = false;

      console.log(this.prpt4);
      // DE.AE-1

      // CHART 35
      
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "DE.AE-1" && detallecuestionario.pregunta.preguntamil == "MIL1"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart35 = new Chart(
        "chart35", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      if(mil1 == true){
        this.deae1 = "MIL 0";
      }

      if(mil1 == false){
        this.deae1 = "MIL 1";
      }

      mil1 = false;
      mil2 = false;
      mil3 = false;


      // DE.AE-5

      // CHART 36
      
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "DE.AE-5" && detallecuestionario.pregunta.preguntamil == "MIL1"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart36 = new Chart(
        "chart36", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      // CHART 26
      
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "DE.AE-5" && detallecuestionario.pregunta.preguntamil == "MIL2"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil2 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil2 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart26 = new Chart(
        "chart26", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      // CHART 16
  
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "DE.AE-5" && detallecuestionario.pregunta.preguntamil == "MIL3"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil3 = true; 
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil3 = true; 
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart16 = new Chart(
        "chart16", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      if(mil1 == true){
        this.deae5 = "MIL 0";
      }

      if(mil3 == true && mil2 == true && mil1 == false){
        this.deae5 = "MIL 1";
      }

      if(mil3 == true && mil2 == false && mil1 == false){
        this.deae5 = "MIL 2";
      }

      if(mil3 == false && mil2 == false && mil1 == false){
        this.deae5 = "MIL 3";
      }

      if(mil3 == false && mil2 == true && mil1 == false){
        this.deae5 = "MIL 1";
      }

      mil1 = false;
      mil2 = false;
      mil3 = false;


      // DE.CM-1

      // CHART 37
      
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "DE.CM-1" && detallecuestionario.pregunta.preguntamil == "MIL1"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart37 = new Chart(
        "chart37", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      // CHART 27
      
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "DE.CM-1" && detallecuestionario.pregunta.preguntamil == "MIL2"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil2 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil2 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart27 = new Chart(
        "chart27", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      // CHART 17
  
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "DE.CM-1" && detallecuestionario.pregunta.preguntamil == "MIL3"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil3 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil3 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);

      const chart17 = new Chart(
        "chart17", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      if(mil1 == true){
        this.decm1 = "MIL 0";
      }

      if(mil3 == true && mil2 == true && mil1 == false){
        this.decm1 = "MIL 1";
      }

      if(mil3 == true && mil2 == false && mil1 == false){
        this.decm1 = "MIL 2";
      }

      if(mil3 == false && mil2 == false && mil1 == false){
        this.decm1 = "MIL 3";
      }

      if(mil3 == false && mil2 == true && mil1 == false){
        this.decm1 = "MIL 1";
      }

      mil1 = false;
      mil2 = false;
      mil3 = false;


      // RS.CO-1

      // CHART 38
      
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "RS.CO-1" && detallecuestionario.pregunta.preguntamil == "MIL1"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart38 = new Chart(
        "chart38", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );
 
      // CHART 28
      
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "RS.CO-1" && detallecuestionario.pregunta.preguntamil == "MIL2"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil2 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil2 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart28 = new Chart(
        "chart28", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      if(mil1 == true){
        this.rsco1 = "MIL 0";
      }

      if(mil2 == true && mil1 == false){
        this.rsco1 = "MIL 1";
      }

      if(mil2 == false && mil1 == false){
        this.rsco1 = "MIL 2";
      }

      mil1 = false;
      mil2 = false;
      mil3 = false;
  

      // RS.MI-2

      // CHART 39
      
      ni = 0;
      pi = 0;
      li = 0;
      fi = 0;

      for(let detallecuestionario of this.detallecuestionarios){
        if(detallecuestionario.pregunta.subcategoria.siglasubcategoria == "RS.MI-2" && detallecuestionario.pregunta.preguntamil == "MIL1"){
          
          if(detallecuestionario.respuestamil.crespuestamil == 1){
            ni = ni + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 2){
            pi = pi + 1;
            mil1 = true;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 3){
            li = li + 1;
          }
          if(detallecuestionario.respuestamil.crespuestamil == 4){
            fi = fi + 1;
          }
          this.arrnumber = [ni, pi, li, fi];
  
          // Ver registro
          console.log(detallecuestionario);
        }
      }
  
      console.log(this.arrnumber);
  
      const chart39 = new Chart(
        "chart39", 
        {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.arrnumber,
              backgroundColor: [
                this.nicolor,
                this.picolor,
                this.licolor,
                this.ficolor
              ],
              hoverOffset: 4
            }]
          },
          options:{
            responsive: true
          }
        }
      );

      if(mil1 == true){
        this.rsmi2 = "MIL 0";
      }

      if(mil1 == false){
        this.rsmi2 = "MIL 1";
      }

      mil1 = false;
      mil2 = false;
      mil3 = false;
  
  
      // FUNCIONES Y SUBCATEGORIAS
  
      this.tempidam2 = 0;
      this.tempprat2 = 0;
      this.tempprip1 = 0;
      this.tempprpt4 = 0;
      this.tempdeae1 = 0;
      this.tempdeae5 = 0;
      this.tempdecm1 = 0;
      this.temprsco1 = 0;
      this.temprsmi2 = 0;

      // idam2
      if(this.idam2 == "MIL 0"){
        this.tempidam2 = 0;
      }
      if(this.idam2 == "MIL 1"){
        this.tempidam2 = 1;
      }
      if(this.idam2 == "MIL 2"){
        this.tempidam2 = 2;
      }
      if(this.idam2 == "MIL 3"){
        this.tempidam2 = 3;
      }

      // prat2
      if(this.prat2 == "MIL 0"){
        this.tempprat2 = 0;
      }
      if(this.prat2 == "MIL 1"){
        this.tempprat2 = 1;
      }
      if(this.prat2 == "MIL 2"){
        this.tempprat2 = 2;
      }
      if(this.prat2 == "MIL 3"){
        this.tempprat2 = 3;
      }

      // prip1
      if(this.prip1 == "MIL 0"){
        this.tempprip1 = 0;
      }
      if(this.prip1 == "MIL 1"){
        this.tempprip1 = 1;
      }
      if(this.prip1 == "MIL 2"){
        this.tempprip1 = 2;
      }
      if(this.prip1 == "MIL 3"){
        this.tempprip1 = 3;
      }

      // prpt4
      if(this.prpt4 == "MIL 0"){
        this.tempprpt4 = 0;
      }
      if(this.prpt4 == "MIL 1"){
        this.tempprpt4 = 1;
      }
      if(this.prpt4 == "MIL 2"){
        this.tempprpt4 = 2;
      }
      if(this.prpt4 == "MIL 3"){
        this.tempprpt4 = 3;
      }

      // deae1
      if(this.deae1 == "MIL 0"){
        this.tempdeae1 = 0;
      }
      if(this.deae1 == "MIL 1"){
        this.tempdeae1 = 1;
      }
      if(this.deae1 == "MIL 2"){
        this.tempdeae1 = 2;
      }
      if(this.deae1 == "MIL 3"){
        this.tempdeae1 = 3;
      }

      // deae5
      if(this.deae5 == "MIL 0"){
        this.tempdeae5 = 0;
      }
      if(this.deae5 == "MIL 1"){
        this.tempdeae5 = 1;
      }
      if(this.deae5 == "MIL 2"){
        this.tempdeae5 = 2;
      }
      if(this.deae5 == "MIL 3"){
        this.tempdeae5 = 3;
      }

      // decm1
      if(this.decm1 == "MIL 0"){
        this.tempdecm1 = 0;
      }
      if(this.decm1 == "MIL 1"){
        this.tempdecm1 = 1;
      }
      if(this.decm1 == "MIL 2"){
        this.tempdecm1 = 2;
      }
      if(this.decm1 == "MIL 3"){
        this.tempdecm1 = 3;
      }

      // rsco1
      if(this.rsco1 == "MIL 0"){
        this.temprsco1 = 0;
      }
      if(this.rsco1 == "MIL 1"){
        this.temprsco1 = 1;
      }
      if(this.rsco1 == "MIL 2"){
        this.temprsco1 = 2;
      }
      if(this.rsco1 == "MIL 3"){
        this.temprsco1 = 3;
      }

      // rsmi2
      if(this.rsmi2 == "MIL 0"){
        this.temprsmi2 = 0;
      }
      if(this.rsmi2 == "MIL 1"){
        this.temprsmi2 = 1;
      }
      if(this.rsmi2 == "MIL 2"){
        this.temprsmi2 = 2;
      }
      if(this.rsmi2 == "MIL 3"){
        this.temprsmi2 = 3;
      }


      let identificar = 0;
      let proteger = 0;
      let detectar = 0;
      let responder = 0;

      // IDENTIFICAR

      if(this.tempidam2 == 0){
        identificar = 0;
      }
      if(this.tempidam2 == 1){
        identificar = 1;
      }
      if(this.tempidam2 == 2){
        identificar = 2;
      }
      if(this.tempidam2 == 3){
        identificar = 3;
      }

      // PROTEGER

      if(this.tempprat2 == 3 || this.tempprip1 == 3 || this.tempprpt4 == 3){
        proteger = 3;
      }

      if(this.tempprat2 == 2 || this.tempprip1 == 2 || this.tempprpt4 == 2){
        proteger = 2;
      }

      if(this.tempprat2 == 1 || this.tempprip1 == 1 || this.tempprpt4 == 1){
        proteger = 1;
      }

      if(this.tempprat2 == 0 || this.tempprip1 == 0 || this.tempprpt4 == 0){
        proteger = 0;
      }

      // DETECTAR

      if(this.tempdeae1 == 3 || this.tempdeae5 == 3 || this.tempdecm1 == 3){
        detectar = 3;
      }

      if(this.tempdeae1 == 2 || this.tempdeae5 == 2 || this.tempdecm1 == 2){
        detectar = 2;
      }

      if(this.tempdeae1 == 1 || this.tempdeae5 == 1 || this.tempdecm1 == 1){
        detectar = 1;
      }

      if(this.tempdeae1 == 0 || this.tempdeae5 == 0 || this.tempdecm1 == 0){
        detectar = 0;
      }

      // RESPONDER

      if(this.temprsco1 == 3 || this.temprsmi2 == 3){
        responder = 3;
      }

      if(this.temprsco1 == 2 || this.temprsmi2 == 2){
        responder = 2;
      }

      if(this.temprsco1 == 1 || this.temprsmi2 == 1){
        responder = 1;
      }

      if(this.temprsco1 == 0 || this.temprsmi2 == 0){
        responder = 0;
      }


      let Funciones = new Chart(
        "Funciones",
        {
          type: 'radar',
          data: {
            labels: ['Identificar', 'Proteger', 'Detectar', 'Responder'],
            datasets: [
              {
                label: 'Funciones',
                data: [identificar, proteger, detectar, responder],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
              }
            ]
          },
          options:{
            responsive: true,
            plugins:{
              legend:{
                display:false
              }
            },
            scales:{
              r:{
                min:0,
                max:3,
                ticks:{
                  stepSize:1
                }
              }
            }
          },
        }
      );

      const Subcategorias = new Chart(
        "Subcategorias",
        {
          type: 'radar',
          data: {
            labels: ['ID.AM-2', 'PR.AT-2', 'PR.IP-1', 'PR.PT-4', 'DE.AE-1', 'DE.AE-5', 'DE.CM-1', 'RS.CO-1', 'RS.MI-2'],
            datasets: [
              {
                label: 'Subcategorias',
                data: [this.tempidam2, this.tempprat2, this.tempprip1, this.tempprpt4, this.tempdeae1, this.tempdeae5, this.tempdecm1, this.temprsco1, this.temprsmi2],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
              }
            ]
          },
          options:{
            responsive: true,
            plugins:{
              legend:{
                display:false
              }
            },
            scales:{
              r:{
                min:0,
                max:3,
                ticks:{
                  stepSize:1
                }
              }
            }
          }
        }
      );
      
    }, 500);
  }

  analisisbrechas(){
    this.router.navigate([`/analisis/${this.cusuario}/${this.ccuestionario}`],{queryParams:{ idam2:this.tempidam2, prat2:this.tempprat2, prip1:this.tempprip1, prpt4:this.tempprpt4, deae1:this.tempdeae1, deae5:this.tempdeae5, decm1:this.tempdecm1, rsco1:this.temprsco1, rsmi2:this.temprsmi2}});
  }

}
