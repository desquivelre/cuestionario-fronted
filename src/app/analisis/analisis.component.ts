import { Component } from '@angular/core';
import { ReporteService } from '../reporte/reporte.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleCuestionario } from '../reporte/detallecuestionario';
import { Subcategoria } from '../reporte/subcategoria';

import Swal from "sweetalert2";

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

  public mostrarPrio: boolean;

  public contraidam2: string;
  public contraprat2: string;
  public contraprip1: string;
  public contraprpt4: string;
  public contradeae1: string;
  public contradeae5: string;
  public contradecm1: string;
  public contrarsco1: string;
  public contrarsmi2: string;

  public mostrarPDF: boolean;

  constructor(private reporteService: ReporteService, private activatedRoute: ActivatedRoute, private router: Router){ }

  ngOnInit():void{

    this.mostrarPDF = false;

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
      
    },1500);

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
    },500);
  }

  saveChanges() {
    
    this.mostrarPrio = false;

    if(this.deseadoidam2 < this.idam2 || Number(this.deseadoidam2) > 3 || this.deseadoidam2 == null){
      this.mostrarPrio = true;
    }

    if(this.deseadoprat2 < this.prat2 || Number(this.deseadoprat2) > 3 || this.deseadoprat2 == null){
      this.mostrarPrio = true;
    }
    
    if(this.deseadoprip1 < this.prip1 || Number(this.deseadoprip1) > 3 || this.deseadoprip1 == null){
      this.mostrarPrio = true;
    }

    if(this.deseadoprpt4 < this.prpt4 || Number(this.deseadoprpt4) > 3 || this.deseadoprpt4 == null){
      this.mostrarPrio = true;
    }

    if(this.deseadodeae1 < this.deae1 || Number(this.deseadodeae1) > 3 || this.deseadodeae1 == null){
      this.mostrarPrio = true;
    }

    if(this.deseadodeae5 < this.deae5 || Number(this.deseadodeae5) > 3 || this.deseadodeae5 == null){
      this.mostrarPrio = true;
    }

    if(this.deseadodecm1 < this.decm1 || Number(this.deseadodecm1) > 3 || this.deseadodecm1 == null){
      this.mostrarPrio = true;
    }

    if(this.deseadorsco1 < this.rsco1 || Number(this.deseadorsco1) > 3 || this.deseadorsco1 == null){
      this.mostrarPrio = true;
    }

    if(this.deseadorsmi2 < this.rsmi2 || Number(this.deseadorsmi2) > 3 || this.deseadorsmi2 == null){
      this.mostrarPrio = true;
    }

    if(this.mostrarPrio == true){
      Swal.fire({
        icon: 'error',
        title: 'Error al registrar nivel deseado',
        text: 'El nivel deseado asignado debe ser mayor o igual al nivel actual, o en su defecto no debe exceder a 3',
      });
    }

    if(this.mostrarPrio == false){
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

      this.contraidam2 = "CM-8, PM-5";
      this.contraprat2 = "AT-3, PM-13"; 
      this.contraprip1 = "CM-2, CM-3, CM-4, CM-5, CM-6, CM-7, CM-9, SA-10"; 
      this.contraprpt4 = "AC-4, AC-17, AC-18, CP-8, SC-7, SC-19, SC-20, SC-21, SC-22, SC-23, SC-24, SC-25, SC-29,  SC-32, SC-36, SC-37, SC-38, SC-39, SC-40, SC-41, SC-43"; 
      this.contradeae1 = "AC-4, CA-3, CM-2, SI-4"; 
      this.contradeae5 = "IR-4, IR-5, IR-8"; 
      this.contradecm1 = "AC-2, AU-12, CA-7, CM-3, SC-5, SC-7, SI-4"; 
      this.contrarsco1 = "CP-2, CP-3, IR-3, IR-8";
      this.contrarsmi2 = "IR-4";

      this.mostrarPDF = true;  
    }
  }

  getCellColoridam2():string {
    if(Number(this.prioidam2) == 4){
      return 'verde';
    }
    if(Number(this.prioidam2) < 4 && Number(this.prioidam2) >= 3 ){
      return 'amarillo';
    }
    if(Number(this.prioidam2) < 3 && Number(this.prioidam2) >= 2 ){
      return 'naranja';
    }
    if(Number(this.prioidam2) < 2 && Number(this.prioidam2) >= 1 ){
      return 'rojo';
    }
    if(Number(this.prioidam2) < 1 && Number(this.prioidam2) >= 0 ){
      return 'rojo';
    }
    return 'table-light';
  }

  getCellColorprat2():string {
    if(Number(this.prioprat2) == 4){
      return 'verde';
    }
    if(Number(this.prioprat2) < 4 && Number(this.prioprat2) >= 3 ){
      return 'amarillo';
    }
    if(Number(this.prioprat2) < 3 && Number(this.prioprat2) >= 2 ){
      return 'naranja';
    }
    if(Number(this.prioprat2) < 2 && Number(this.prioprat2) >= 1 ){
      return 'rojo';
    }
    if(Number(this.prioprat2) < 1 && Number(this.prioprat2) >= 0 ){
      return 'rojo';
    }
    return 'table-light';
  }

  getCellColorprip1():string {
    if(Number(this.prioprip1) == 4){
      return 'verde';
    }
    if(Number(this.prioprip1) < 4 && Number(this.prioprip1) >= 3 ){
      return 'amarillo';
    }
    if(Number(this.prioprip1) < 3 && Number(this.prioprip1) >= 2 ){
      return 'naranja';
    }
    if(Number(this.prioprip1) < 2 && Number(this.prioprip1) >= 1 ){
      return 'rojo';
    }
    if(Number(this.prioprip1) < 1 && Number(this.prioprip1) >= 0 ){
      return 'rojo';
    }
    return 'table-light';
  }

  getCellColorprpt4():string {
    if(Number(this.prioprpt4) == 4){
      return 'verde';
    }
    if(Number(this.prioprpt4) < 4 && Number(this.prioprpt4) >= 3 ){
      return 'amarillo';
    }
    if(Number(this.prioprpt4) < 3 && Number(this.prioprpt4) >= 2 ){
      return 'naranja';
    }
    if(Number(this.prioprpt4) < 2 && Number(this.prioprpt4) >= 1 ){
      return 'rojo';
    }
    if(Number(this.prioprpt4) < 1 && Number(this.prioprpt4) >= 0 ){
      return 'rojo';
    }
    return 'table-light';
  }

  getCellColordeae1():string {
    if(Number(this.priodeae1) == 4){
      return 'verde';
    }
    if(Number(this.priodeae1) < 4 && Number(this.priodeae1) >= 3 ){
      return 'amarillo';
    }
    if(Number(this.priodeae1) < 3 && Number(this.priodeae1) >= 2 ){
      return 'naranja';
    }
    if(Number(this.priodeae1) < 2 && Number(this.priodeae1) >= 1 ){
      return 'rojo';
    }
    if(Number(this.priodeae1) < 1 && Number(this.priodeae1) >= 0 ){
      return 'rojo';
    }
    return 'table-light';
  }
  
  getCellColordeae5():string {
    if(Number(this.priodeae5) == 4){
      return 'verde';
    }
    if(Number(this.priodeae5) < 4 && Number(this.priodeae5) >= 3 ){
      return 'amarillo';
    }
    if(Number(this.priodeae5) < 3 && Number(this.priodeae5) >= 2 ){
      return 'naranja';
    }
    if(Number(this.priodeae5) < 2 && Number(this.priodeae5) >= 1 ){
      return 'rojo';
    }
    if(Number(this.priodeae5) < 1 && Number(this.priodeae5) >= 0 ){
      return 'rojo';
    }
    return 'table-light';
  }

  getCellColordecm1():string {
    if(Number(this.priodecm1) == 4){
      return 'verde';
    }
    if(Number(this.priodecm1) < 4 && Number(this.priodecm1) >= 3 ){
      return 'amarillo';
    }
    if(Number(this.priodecm1) < 3 && Number(this.priodecm1) >= 2 ){
      return 'naranja';
    }
    if(Number(this.priodecm1) < 2 && Number(this.priodecm1) >= 1 ){
      return 'rojo';
    }
    if(Number(this.priodecm1) < 1 && Number(this.priodecm1) >= 0 ){
      return 'rojo';
    }
    return 'table-light';
  }

  getCellColorrsco1():string {
    if(Number(this.priorsco1) == 4){
      return 'verde';
    }
    if(Number(this.priorsco1) < 4 && Number(this.priorsco1) >= 3 ){
      return 'amarillo';
    }
    if(Number(this.priorsco1) < 3 && Number(this.priorsco1) >= 2 ){
      return 'naranja';
    }
    if(Number(this.priorsco1) < 2 && Number(this.priorsco1) >= 1 ){
      return 'rojo';
    }
    if(Number(this.priorsco1) < 1 && Number(this.priorsco1) >= 0 ){
      return 'rojo';
    }
    return 'table-light';
  }

  getCellColorrsmi2():string {
    if(Number(this.priorsmi2) == 4){
      return 'verde';
    }
    if(Number(this.priorsmi2) < 4 && Number(this.priorsmi2) >= 3 ){
      return 'amarillo';
    }
    if(Number(this.priorsmi2) < 3 && Number(this.priorsmi2) >= 2 ){
      return 'naranja';
    }
    if(Number(this.priorsmi2) < 2 && Number(this.priorsmi2) >= 1 ){
      return 'rojo';
    }
    if(Number(this.priorsmi2) < 1 && Number(this.priorsmi2) >= 0 ){
      return 'rojo';
    }
    return 'table-light';
  }

  agradecimiento(){
    this.router.navigate([`/logout`]);
  }
}
