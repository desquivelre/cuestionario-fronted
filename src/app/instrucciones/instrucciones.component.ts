import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent {

  public codigousuario: Number;
  public ccuestionario: Number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  comenzarCuestionario() {

    this.ccuestionario = 1;

    this.router.navigateByUrl(`/cuestionario/${this.codigousuario}/${this.ccuestionario}`);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.codigousuario = params['codigousuario'];
    });
  }

}
