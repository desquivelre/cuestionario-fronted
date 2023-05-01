import { Component } from '@angular/core';
import { AgradecimientoService } from './agradecimiento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agradecimiento',
  templateUrl: './agradecimiento.component.html',
  styleUrls: ['./agradecimiento.component.css']
})
export class AgradecimientoComponent {

  constructor(private agradecimientoService: AgradecimientoService, private activatedRoute: ActivatedRoute, private router: Router) { 
    
  }

  salir() {
    this.router.navigateByUrl(`/login`);
  }

}
