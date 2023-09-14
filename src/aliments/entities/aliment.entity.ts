import { Category } from "src/categories/entities/category.entity";
import { Restriction } from "src/restrictions/entities/restriction.entity";
import { Saison } from "src/saisons/entities/saison.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Aliment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  libelle: string;

  @Column({ nullable: false, type: 'int' })
  age_introduction: number;

  @Column({ nullable: false, type: 'int' })
  id_categorie: number;

  @ManyToOne(() => Category, (category) => category.aliments)
  @JoinColumn({ name: 'id_categorie' })
  category: Category;

  @ManyToMany(() => Saison, (saison) => saison.aliments, { eager: true })
  @JoinTable({
    //nécessaire que sur une des deux tables
    name: 'produire', // nom de la table d'association dans BDD
    joinColumn: { name: 'id_aliment', referencedColumnName: 'id' },
    // { name: 'nom_colonne_table_produire', referencedColumnName: 'nom_colonne_table_aliment' }
    inverseJoinColumn: { name: 'id_saison', referencedColumnName: 'id' },
    // { name: 'nom_colonne_table_produire', referencedColumnName: 'nom_colonne_table_saison' }
  })
  saisons: Saison[];

  @ManyToMany(() => Restriction, (restriction) => restriction.aliments, { eager: true })
  @JoinTable({
    name: 'limiter',
    joinColumn: { name: 'id_aliment', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'id_restriction', referencedColumnName: 'id' },
  })
  restrictions: Restriction[];
}
