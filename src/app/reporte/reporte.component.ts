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

  public detallecuestionarios: any[];
  public arrnumber: Number[];

  constructor(private reporteService: ReporteService, private activatedRoute: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.cusuario = Number(params['usuario']);
      this.ccuestionario = Number(params['cuestionario']);
    });

    this.ccuestionario = 1;
    this.cusuario = 2;

    console.log(this.cusuario);
    console.log(this.ccuestionario);

    this.reporteService.getDetalleCuestionarios2(this.ccuestionario, this.cusuario).subscribe(
      (detallecuestionarios:any[]) => {
        this.detallecuestionarios = detallecuestionarios;
      }
    );

    console.log(this.detallecuestionarios);

    // for(let i=0; i<37;i++){
    //   if(this.detallecuestionarios[i].cpregunta.csubcategoria.nsubcategoria == "ID.AM-2" && this.detallecuestionarios[i].cpregunta.preguntamil == "MIL3"){
        
    //     let ni = 0;
    //     let pi = 0;
    //     let li = 0;
    //     let fi = 0;

    //     if(this.detallecuestionarios[i].crespuestamil == 1){
    //       ni++;
    //     }
    //     if(this.detallecuestionarios[i].crespuestamil == 2){
    //       pi++;
    //     }
    //     if(this.detallecuestionarios[i].crespuestamil == 3){
    //       li++;
    //     }
    //     if(this.detallecuestionarios[i].crespuestamil == 4){
    //       fi++;
    //     }

    //     this.arrnumber = [ni, pi, li, fi];
    //   }
    // }

    this.arrnumber = [0, 1, 1, 0];
    
    // FILA 1

    const chart11 = new Chart(
      "chart11", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: this.arrnumber,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true,
        }
      }
    );

    const chart12 = new Chart(
      "chart12", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 1, 1, 1],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart13 = new Chart(
      "chart13", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 1, 1, 1],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart14 = new Chart(
      "chart14", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 1, 1, 1],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );


    const chart16 = new Chart(
      "chart16", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 1, 1, 1],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart17 = new Chart(
      "chart17", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 1, 0, 0],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    // FILA 2

    const chart21 = new Chart(
      "chart21", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 0, 0, 1],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart22 = new Chart(
      "chart22", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [1, 1, 0, 0],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart23 = new Chart(
      "chart23", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [1, 0, 0, 0],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart24 = new Chart(
      "chart24", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 1, 0, 0],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart26 = new Chart(
      "chart26", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 1, 1, 1],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart27 = new Chart(
      "chart27", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [1, 0, 1, 0],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart28 = new Chart(
      "chart28", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 1, 1, 0],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    // FILA 3

    const chart31 = new Chart(
      "chart31", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [1, 0, 1, 1],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart32 = new Chart(
      "chart32", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 1, 0, 0],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart33 = new Chart(
      "chart33", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 0, 1, 0],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart34 = new Chart(
      "chart34", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [1, 0, 0, 1],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart35 = new Chart(
      "chart35", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 1, 1, 0],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart36 = new Chart(
      "chart36", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 1, 0, 1],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart37 = new Chart(
      "chart37", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 0, 0, 1],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart38 = new Chart(
      "chart38", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [1, 0, 1, 0],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );

    const chart39 = new Chart(
      "chart39", 
      {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [1, 0, 1, 1],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(150, 80, 235)'
            ],
            hoverOffset: 4
          }]
        },
        options:{
          responsive: true
        }
      }
    );


    // FUNCIONES Y SUBCATEGORIAS

    let Funciones = new Chart(
      "Funciones",
      {
        type: 'radar',
        data: {
          labels: ['Identificar', 'Proteger', 'Detectar', 'Responder'],
          datasets: [
            {
              label: 'Funciones',
              data: [3, 2, 3, 1],
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
          responsive: true
        }
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
              data: [3, 2, 2, 2, 2, 3, 2, 2, 1],
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
          responsive: true
        }
      }
    );


  }
  
  salir() {

    this.router.navigateByUrl(`/login`);
  }

}
