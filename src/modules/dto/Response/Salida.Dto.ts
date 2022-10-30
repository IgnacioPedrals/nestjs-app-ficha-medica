export class SalidaDto {
    constructor(fueCorrecto: boolean, mensaje: string, data: any) {
        this.fueCorrecto = fueCorrecto;
        this.mensaje = mensaje;
        this.data = data;
    }

    fueCorrecto: boolean;
    mensaje: string;
    data: any;
}