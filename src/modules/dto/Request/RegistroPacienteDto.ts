import { ApiProperty } from "@nestjs/swagger"

export class RegistroPacienteDto{
    @ApiProperty()
    rut:string
    
    @ApiProperty()
    nombres:string

    @ApiProperty()
    apellidos:string

    @ApiProperty()
    direccion:string

    @ApiProperty()
    estadocivil:number

    @ApiProperty()
    comentarios:string

    @ApiProperty()
    email:string

    @ApiProperty()
    ciudad:string

    @ApiProperty()
    telefono:number

    @ApiProperty()
    fechanacimiento:Date

    }