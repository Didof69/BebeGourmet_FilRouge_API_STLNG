import { Aliment } from "src/aliments/entities/aliment.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  libelle: string;

  @OneToMany(() => Aliment, (aliment) => aliment.category)
  aliments: Aliment[];
}
