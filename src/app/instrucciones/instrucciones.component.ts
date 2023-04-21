import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent {

  private codigousuario: Number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  comenzarCuestionario() {
    this.router.navigateByUrl(`/cuestionario/${this.codigousuario}/1`);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.codigousuario = params['codigousuario'];
    });
  }

}
