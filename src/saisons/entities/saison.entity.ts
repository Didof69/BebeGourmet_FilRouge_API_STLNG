import { Aliment } from "src/aliments/entities/aliment.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Saison {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  libelle: string;

  @ManyToMany(() => Aliment, (aliment) => aliment.saisons,{eager:false})
  aliments: Aliment[];
}
