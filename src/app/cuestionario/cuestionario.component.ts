import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from './cuestionario.service';
import { DetalleCuestionario } from './detallecuestionario';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pregunta } from './pregunta';
import { ReporteService } from '../reporte/reporte.service';
import { DetalleCuestionario2 } from './detallecuestionario2';


@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

  public detallecuestionarios: DetalleCuestionario[];
  public detallecuestionario: DetalleCuestionario;

  public detallecuestionariotemp: DetalleCuestionario;

  public preguntas: Pregunta[];
  public pregunta: Pregunta;

  // GUARDAR RESPUESTA 
  public preguntaActual = 0;
  public respuestaSeleccionada: string;
  
  public cusuario: Number;
  public ccuestionario: Number;
  public cpregunta: Number;
  
  public form: FormGroup;
  
  // UPDATE RESPUESTA
  public detallecuestionarios2: DetalleCuestionario2[];
  public detallecuestionario2: DetalleCuestionario2;
  
  constructor(private cuestionarioService: CuestionarioService, private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private reporteService: ReporteService) { 
    this.form = this.fb.group({
      checkArray: this.fb.array([]),
    })
  }

  ngOnInit(): void {
    this.cuestionarioService.getPreguntas().subscribe(
      (preguntas) => {
        this.preguntas = preguntas;
      }
    );

    setTimeout(()=>{
      this.activatedRoute.params.subscribe(params=>{
        this.cusuario = Number(params['usuario']);
        this.ccuestionario = Number(params['cuestionario']);
      })

      this.cargarDetalleCuestionariosBD();

    }, 500);
  }

  cargarDetalleCuestionariosBD(){

    this.cuestionarioService.getDetalleCuestionarios2(this.ccuestionario, this.cusuario).subscribe(
      (response) => {
        this.detallecuestionarios2 = response;
        console.log(response);
      },err=>{
        // alert("Lista detallecuestionario no identificado")
       }
    );
  }

  onChange(check:string){

    this.respuestaSeleccionada = check;

    const checkboxes = document.getElementsByName('check');

    for (let i = 0; i < checkboxes.length; i++) {
      const checkbox = checkboxes[i] as HTMLInputElement;
      if (checkbox.value !== check) {
        checkbox.checked = false;
      }
    }
  }

  onCheckboxChange(e:any){

    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if(e.target.checked){
      checkArray.push(new FormControl(e.target.value));
    }
    else{
      var i = 0;

      checkArray.controls.forEach((item: any) => {
        if(item.value == e.target.value){
          checkArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }

  public siguientePregunta(i:number){
        
    this.preguntaActual++;
    console.log(this.preguntas[i]);

    let cpregunta = this.preguntas[i].cpregunta;
    let crearvalid = false;

    for(let detalle of this.detallecuestionarios2){
      if(this.cusuario == detalle.usuario.cusuario && this.ccuestionario == detalle.cuestionario.ccuestionario && this.preguntas[i].cpregunta == detalle.pregunta.cpregunta){

        this.cuestionarioService.updateDetalleCuestionario(detalle.id, Number(this.respuestaSeleccionada)).subscribe(
          (response) => {
            detalle = response;
          }
        );

        crearvalid = true;

        console.log(crearvalid);
      }
    }

    if(crearvalid == false){

      console.log(crearvalid);

      if(this.respuestaSeleccionada == null){
        this.respuestaSeleccionada = '1';
      }

      this.cuestionarioService.createDetalleCuestionario(this.cusuario, this.ccuestionario, cpregunta, Number(this.respuestaSeleccionada)).subscribe(
        (detallecuestionariotemp) => {
          this.detallecuestionariotemp = detallecuestionariotemp;
        }
      );
    }

    this.respuestaSeleccionada = '1';
  }

  public siguientePregunta2(i:number){
    this.preguntaActual++;
    console.log(this.preguntas[i]);

    let cpregunta = this.preguntas[i].cpregunta;
    let crearvalid = false;

    for(let detalle of this.detallecuestionarios2){
      if(this.cusuario == detalle.usuario.cusuario && this.ccuestionario == detalle.cuestionario.ccuestionario && this.preguntas[i].cpregunta == detalle.pregunta.cpregunta){

        this.cuestionarioService.updateDetalleCuestionario(detalle.id, Number(this.respuestaSeleccionada)).subscribe(
          (response) => {
            detalle = response;
          }
        );

        crearvalid = true;

        console.log(crearvalid);
      }
    }

    if(crearvalid == false){

      console.log(crearvalid);

      this.cuestionarioService.createDetalleCuestionario(this.cusuario, this.ccuestionario, cpregunta, Number(this.respuestaSeleccionada)).subscribe(
        (detallecuestionariotemp) => {
          this.detallecuestionariotemp = detallecuestionariotemp;
        }
      );
    }

    this.respuestaSeleccionada = '1';

    this.router.navigateByUrl(`/reporte/${this.cusuario}/${this.ccuestionario}`);
  }

  // FIN GUARDAR RESPUESTA
}
