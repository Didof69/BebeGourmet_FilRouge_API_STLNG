import { Aliment } from "src/aliments/entities/aliment.entity";
import { Enfant } from "src/enfants/entities/enfant.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Restriction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  libelle: string;

  @ManyToMany(() => Aliment, (aliment) => aliment.restrictions, { eager: true })
  aliments: Aliment[];

  @ManyToMany(() => Enfant, (enfant) => enfant.restrictions, { eager: true })
  enfants: Enfant[];
}
