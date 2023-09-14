import { Restriction } from "src/restrictions/entities/restriction.entity";
import { Utilisateur } from "src/utilisateurs/entities/utilisateur.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Enfant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  prenom: string;

  @Column({ nullable: false, type: 'date' })
  date_naissance: Date;

  @Column({ nullable: false, type: 'int' })
  id_utilisateur: number;

  @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.enfants)
  @JoinColumn({ name: 'id_utilisateur' })
  utilisateur: Utilisateur;

  @ManyToMany(() => Restriction, (restriction) => restriction.enfants, {
    eager: true,
  })
  @JoinTable({
    name: 'posseder',
    joinColumn: { name: 'id_enfant', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'id_restriction', referencedColumnName: 'id' },
  })
  restrictions: Restriction[];
}
