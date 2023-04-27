import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent {

  public ccuestionario: Number;
  public cusuario: Number;


  constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.cusuario = Number(params['usuario']);
      this.ccuestionario = Number(params['cuestionario']);
    })

    this.ccuestionario = 1;

    console.log(this.cusuario);
    console.log(this.ccuestionario);


    let Funciones = new Chart(
      "Funciones",
      {
        type: 'radar',
        data: {
          labels: ['Identificar', 'Proteger', 'Detectar', 'Responder'],
          datasets: [
            {
              label: 'Funciones',
              data: [2, 2, 3, 1],
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

    let Subcategorias = new Chart(
      "Subcategorias",
      {
        type: 'radar',
        data: {
          labels: ['ID.AM-2', 'PR.AT-2', 'PR.IP-1', 'PR.PT-4', 'DE.AE-1', 'DE.AE-5', 'DE.CM-1', 'RS.CO-1', 'RS.MI-2'],
          datasets: [
            {
              label: 'Subcategorias',
              data: [3, 1, 1, 2, 2, 3, 2, 2, 1],
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

    // EJEMPLO CHART CON LEYENDA
    // const chart2 = new Chart(
    //   "chart2", 
    //   {
    //     type: 'doughnut',
    //     data: {
    //       labels: [
    //         'No se ha implementado',
    //         'Implementado parcialmente',
    //         'Implementado en gran medida',
    //         'Totalmente implementado'
    //       ],
    //       datasets: [{
    //         label: 'My First Dataset',
    //         data: [300, 50, 100, 200],
    //         backgroundColor: [
    //           'rgb(255, 99, 132)',
    //           'rgb(54, 162, 235)',
    //           'rgb(255, 205, 86)',
    //           'rgb(150, 80, 235)'
    //         ],
    //         hoverOffset: 4
    //       }]
    //     },
    //     options:{
    //       responsive: true
    //     }
    //   }
    // );

    const chart1 = new Chart(
      "chart1", 
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

    const chart2 = new Chart(
      "chart2", 
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
  }

  salir() {

    this.router.navigateByUrl(`/login`);
  }

}
