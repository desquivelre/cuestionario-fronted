import { Pregunta } from "./pregunta";
import { Respuestamil } from "./respuestamil";

export class DetalleCuestionario {
    id: number;
    pregunta: Pregunta;
    respuestamil: Respuestamil;
    cusuario: number;
    ccuestionario: number;
}