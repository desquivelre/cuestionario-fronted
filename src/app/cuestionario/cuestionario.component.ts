import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from './cuestionario.service';
import { DetalleCuestionario } from './detallecuestionario';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

  public detallecuestionarios: DetalleCuestionario[];
  public detallecuestionario: DetalleCuestionario;

  constructor(private cuestionarioService: CuestionarioService) { }

  ngOnInit(): void {
    // this.cuestionarioService.getDetalleCuestionario().subscribe(
    //   (response) => {
    //     this.detalleCuestionario = response;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    this.cuestionarioService.getDetalleCuestionarios().subscribe(
      (detallecuestionarios) => {
        this.detallecuestionarios = detallecuestionarios
      }
    );

    this.cuestionarioService.getDetalleCuestionario(1).subscribe(
      (detallecuestionario) => {
        this.detallecuestionario = detallecuestionario
      }
    );

  }

}
