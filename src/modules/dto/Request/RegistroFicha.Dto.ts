import { RegistroPacienteDto } from "./RegistroPacienteDto"; 
import { ApiProperty} from "@nestjs/swagger"

export class RegistroFichaDto {
   @ApiProperty()
    formulario: RegistroPacienteDto
}