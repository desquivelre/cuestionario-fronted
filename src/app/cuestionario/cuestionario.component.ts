import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from './cuestionario.service';
import { DetalleCuestionario } from './detallecuestionario';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pregunta } from './pregunta';

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

  constructor(private cuestionarioService: CuestionarioService, private fb: FormBuilder, private activatedRoute: ActivatedRoute) { 
    this.form = this.fb.group({
      checkArray: this.fb.array([]),
    })
  }

  // GUARDAR RESPUESTA 

  public preguntaActual = 0;
  public respuestaSeleccionada: string;

  public cusuario: Number;
  public ccuestionario: Number;
  public cpregunta: Number;

  public form: FormGroup;

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

    console.log(checkArray);

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
    console.log(this.preguntas[i])

    // this.cuestionarioService.updateDetalleCuestionario(this.detallecuestionarios[i], Number(this.respuestaSeleccionada)).subscribe(
    //   (detallecuestionario) => {
    //     this.detallecuestionario = detallecuestionario;
    //   }
    // );
    this.activatedRoute.params.subscribe(params=>{
      this.cusuario = Number(params['usuario']);
      this.ccuestionario = Number(params['cuestionario']);
    })

    let cpregunta = this.preguntas[i].cpregunta;

    // let updateNuevo = false;
    
    // for(let detallecuestionario of this.detallecuestionarios)
    // {
    //   if(detallecuestionario.cusuario == this.cusuario && detallecuestionario.ccuestionario == this.ccuestionario && detallecuestionario.cpregunta == cpregunta)
    //   {
    //     updateNuevo = true;
    //   }
    // }

    // if(updateNuevo == false){

    // }

    this.cuestionarioService.createDetalleCuestionario(this.cusuario, this.ccuestionario, cpregunta, Number(this.respuestaSeleccionada)).subscribe(
      (detallecuestionariotemp) => {
        this.detallecuestionariotemp = detallecuestionariotemp;
      }
    );

    this.respuestaSeleccionada = '1';
  }

  // FIN GUARDAR RESPUESTA

  ngOnInit(): void {
    this.cuestionarioService.getPreguntas().subscribe(
      (preguntas) => {
        this.preguntas = preguntas;
      }
    );

    this.cuestionarioService.getDetalleCuestionarios().subscribe(
      (detallecuestionarios) => {
        this.detallecuestionarios = detallecuestionarios;
      }
    );

    // this.cuestionarioService.getDetalleCuestionario().subscribe(
    //   (detallecuestionario) => {
    //     this.detallecuestionario = detallecuestionario;
    //   }
    // );

  }

}
