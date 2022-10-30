import { Injectable, Logger } from "@nestjs/common";
import { query } from "express";
import { FichaMedicaEntity } from "src/entities/FichaMedica.entities";
import { DataSource, getConnection } from "typeorm";
import { RegistroFichaDto } from "../dto/Request/RegistroFicha.Dto";
import { RegistroPacienteDto } from "../dto/Request/RegistroPacienteDto";
import { SalidaDto } from "../dto/Response/Salida.Dto";

@Injectable()
export class FichaMedicaService {
  constructor(private datasource: DataSource) {}
  private readonly logger = new Logger(FichaMedicaService.name);

  async getFichaMedica(): Promise<any> {
    try {
      const query = this.datasource.getRepository(FichaMedicaEntity).createQueryBuilder("ficha").where("1=1");
      const retorno = await query.getMany();
      return retorno;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
  async InsertPaciente(paciente: RegistroFichaDto): Promise<any> {
    try {
      const RegistroPacienteBD = this.CastDtoRegistroFicha(paciente.formulario);

      this.logger.debug(paciente);

      const resultadoinsercion = await this.datasource.getRepository(FichaMedicaEntity).save(RegistroPacienteBD);

      if (resultadoinsercion instanceof FichaMedicaEntity) {
        return new SalidaDto(true, "Su solicitud de Registro fue enviada con éxito", null);
      }
    } catch (error) {
      this.logger.warn(error);
      return new SalidaDto(false, "a ocurrido un error al registrar el paciente", error.message);
    }
    return new SalidaDto(false, "a ocurrido un error al registrar el paciente", null);
  }

  private CastDtoRegistroFicha(paciente: RegistroPacienteDto): FichaMedicaEntity {
    const RegistroPacienteBD = new FichaMedicaEntity();
    RegistroPacienteBD.rutFicha = paciente.rut;
    RegistroPacienteBD.apellidosFicha = paciente.apellidos;
    RegistroPacienteBD.nombresFicha = paciente.nombres;
    RegistroPacienteBD.emailFicha = paciente.email;
    RegistroPacienteBD.direccionFicha = paciente.direccion;
    RegistroPacienteBD.fechaNacFicha = paciente.fechanacimiento;
    RegistroPacienteBD.ciudadFicha = paciente.ciudad;
    RegistroPacienteBD.telefonoFicha = paciente.telefono;
    RegistroPacienteBD.comentariosFicha = paciente.comentarios;
    RegistroPacienteBD.estadoCivFicha = paciente.estadocivil;

    return RegistroPacienteBD;
  }

  async BuscarPorApellido(apellido:string): Promise<any>{
    const query= this.datasource.getRepository(FichaMedicaEntity)
    .createQueryBuilder('ficha')
    .where('ficha.apellidosFicha like :apellido', {apellido: `%${apellido}%`}) 
    const retorno= query.getMany(); 
    return retorno
  }
}
