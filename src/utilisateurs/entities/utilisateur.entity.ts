import { Enfant } from "src/enfants/entities/enfant.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nom: string;

  @Column({ nullable: false })
  prenom: string;

  @Column({ nullable: false, unique: true }) // Utilisation de l'option unique
  email: string;

  @Column({ nullable: false })
  mot_de_passe: string;

  @Column({ nullable: false })
  admin: boolean;

  @OneToMany(() => Enfant, (enfant) => enfant.utilisateur, {eager:true})
  enfants: Enfant[];
}
