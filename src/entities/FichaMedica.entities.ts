import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
@Entity('FichaMedica')

export class FichaMedicaEntity {
    @PrimaryGeneratedColumn()
    idFicha:number; 

    @Column()
    rutFicha:string; 

    @Column()
    nombresFicha:string; 

    @Column()
    apellidosFicha:string;

    @Column()
    direccionFicha:string; 

    @Column()
    ciudadFicha:string; 

    @Column()
    telefonoFicha:number; 

    @Column()
    emailFicha:string; 

    @Column()
    fechaNacFicha:Date; 

    @Column()
    estadoCivFicha:number; 

    @Column()
    comentariosFicha:string; 
}