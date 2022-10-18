import { IsNotEmpty } from "class-validator"
import { Categoria } from "src/Categoria/entities/categoria.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: "tb_produto"})
export class Produto {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty() // 100,00
    @Column({type: "decimal", precision: 5, scale: 2, default: 0})
    Preco: number

    @UpdateDateColumn()
    data: Date
    
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria
}