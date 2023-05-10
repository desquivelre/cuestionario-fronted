import { Component } from '@angular/core';
import { ReporteService } from '../reporte/reporte.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleCuestionario } from '../reporte/detallecuestionario';
import { Subcategoria } from '../reporte/subcategoria';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent {

  public cusuario: Number;
  public ccuestionario: Number;

  public detallecuestionarios: DetalleCuestionario[];

  public subcategorias: Subcategoria[];

  public idam2 : Number;
  public prat2 : Number;
  public prip1 : Number;
  public prpt4 : Number;
  public deae1 : Number;
  public deae5 : Number;
  public decm1 : Number;
  public rsco1 : Number;
  public rsmi2 : Number;

  public bestidam2: Number;
  public bestprat2: Number;
  public bestprip1: Number;
  public bestprpt4: Number;
  public bestdeae1: Number;
  public bestdeae5: Number;
  public bestdecm1: Number;
  public bestrsco1: Number;
  public bestrsmi2: Number;

  public deseadoidam2: Number;
  public deseadoprat2: Number;
  public deseadoprip1: Number;
  public deseadoprpt4: Number;
  public deseadodeae1: Number;
  public deseadodeae5: Number;
  public deseadodecm1: Number;
  public deseadorsco1: Number;
  public deseadorsmi2: Number;

  public brechaidam2: Number;
  public brechaprat2: Number;
  public brechaprip1: Number;
  public brechaprpt4: Number;
  public brechadeae1: Number;
  public brechadeae5: Number;
  public brechadecm1: Number;
  public brecharsco1: Number;
  public brecharsmi2: Number;

  public prioidam2: Number;
  public prioprat2: Number;
  public prioprip1: Number;
  public prioprpt4: Number;
  public priodeae1: Number;
  public priodeae5: Number;
  public priodecm1: Number;
  public priorsco1: Number;
  public priorsmi2: Number;

  public selectedRow: number;

  public mostrarDiv: boolean;

  constructor(private reporteService: ReporteService, private activatedRoute: ActivatedRoute, private router: Router){ }

  ngOnInit():void{

    setTimeout(()=>{

      this.mostrarDiv = false;

      this.activatedRoute.params.subscribe(params=>{
        this.cusuario = Number(params['usuario']);
        this.ccuestionario = Number(params['cuestionario']);
      });

      this.activatedRoute.queryParams.subscribe(params=>{
        this.idam2 = params['idam2'];
        this.prat2 = params['prat2'];
        this.prip1 = params['prip1'];
        this.prpt4 = params['prpt4'];
        this.deae1 = params['deae1'];
        this.deae5 = params['deae5'];
        this.decm1 = params['decm1'];
        this.rsco1 = params['rsco1'];
        this.rsmi2 = params['rsmi2'];
      });

      this.cargardetallecuestionario();
      
    },500);

    this.bestidam2 = 1;
    this.bestprat2 = 1;
    this.bestprip1 = 1;
    this.bestprpt4 = 1;
    this.bestdeae1 = 1;
    this.bestdeae5 = 1;
    this.bestdecm1 = 1;
    this.bestrsco1 = 1;
    this.bestrsmi2 = 1;
  }

  cargardetallecuestionario(){

    this.ccuestionario = 1;

    this.reporteService.getSubcategorias().subscribe(
      (response) => {
        this.subcategorias = response;
      },err=>{
        alert("Lista detallecuestionario no identificado")
       }
    );

    setTimeout(()=>{
      this.mostrarDiv = true;
    },2000);
  }

  saveChanges() {
    
    this.brechaidam2 = Number(this.deseadoidam2) - Number(this.idam2);
    this.prioidam2 = 4 - ((1/Number(this.bestidam2)) * Number(this.brechaidam2));

    this.brechaprat2 = Number(this.deseadoprat2) - Number(this.prat2);
    this.prioprat2 = 4 - ((1/Number(this.bestprat2)) * Number(this.brechaprat2));

    this.brechaprip1 = Number(this.deseadoprip1) - Number(this.prip1);
    this.prioprip1 = 4 - ((1/Number(this.bestprip1)) * Number(this.brechaprip1));

    this.brechaprpt4 = Number(this.deseadoprpt4) - Number(this.prpt4);
    this.prioprpt4 = 4 - ((1/Number(this.bestprpt4)) * Number(this.brechaprpt4));

    this.brechadeae1 = Number(this.deseadodeae1) - Number(this.deae1);
    this.priodeae1 = 4 - ((1/Number(this.bestdeae1)) * Number(this.brechadeae1));

    this.brechadeae5 = Number(this.deseadodeae5) - Number(this.deae5);
    this.priodeae5 = 4 - ((1/Number(this.bestdeae5)) * Number(this.brechadeae5));

    this.brechadecm1 = Number(this.deseadodecm1) - Number(this.decm1);
    this.priodecm1 = 4 - ((1/Number(this.bestdecm1)) * Number(this.brechadecm1));

    this.brecharsco1 = Number(this.deseadorsco1) - Number(this.rsco1);
    this.priorsco1 = 4 - ((1/Number(this.bestrsco1)) * Number(this.brecharsco1));

    this.brecharsmi2 = Number(this.deseadorsmi2) - Number(this.rsmi2);
    this.priorsmi2 = 4 - ((1/Number(this.bestrsmi2)) * Number(this.brecharsmi2));

  }

  agradecimiento(){
    this.router.navigate([`/logout`]);
  }
}
