import { Body, Controller, Get, Logger, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Query } from "typeorm/driver/Query";
import { RegistroFichaDto } from "../dto/Request/RegistroFicha.Dto";
import { RegistroPacienteDto } from "../dto/Request/RegistroPacienteDto";
import { SalidaDto } from "../dto/Response/Salida.Dto";
import { FichaMedicaService } from "../services/FichaMedica.service";

@Controller("FichaMedica")
@ApiTags("FichaMedica")
export class FichaMedicaController {
  private readonly logger = new Logger(FichaMedicaController.name);

  constructor(private fichamedicaService: FichaMedicaService) {}

  @Get()
  async getFichaMedica(): Promise<any> {
    return await this.fichamedicaService.getFichaMedica();
  }

  @Post("IngresoFichaMedica")
  async InsertPaciente(@Body() paciente: RegistroFichaDto): Promise<SalidaDto> {
    return this.fichamedicaService.InsertPaciente(paciente);
  }
  @Get('Buscar/:apellido')
  async BuscarPorApellido(@Param('apellido') apellido: string): Promise<any>{ 
    return this.fichamedicaService.BuscarPorApellido(apellido)
  }
}
