import { Pregunta } from "../reporte/pregunta";
import { Respuestamil } from "../reporte/respuestamil";
import { Cuestionario } from "./cuestionario";
import { Usuario } from "./usuario";

export class DetalleCuestionario2 {
    id: number;
    pregunta: Pregunta;
    respuestamil: Respuestamil;
    usuario: Usuario;
    cuestionario: Cuestionario;
}