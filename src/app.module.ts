import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { EnfantsModule } from './enfants/enfants.module';
import { RestrictionsModule } from './restrictions/restrictions.module';
import { AlimentsModule } from './aliments/aliments.module';
import { CategoriesModule } from './categories/categories.module';
import { SaisonsModule } from './saisons/saisons.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aliment } from './aliments/entities/aliment.entity';
import { Saison } from './saisons/entities/saison.entity';
import { Category } from './categories/entities/category.entity';
import { Enfant } from './enfants/entities/enfant.entity';
import { Restriction } from './restrictions/entities/restriction.entity';
import { Utilisateur } from './utilisateurs/entities/utilisateur.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [`.env`] }),
    UtilisateursModule,
    EnfantsModule,
    RestrictionsModule,
    AlimentsModule,
    CategoriesModule,
    SaisonsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Aliment, Saison, Category, Enfant,Restriction,Utilisateur],
      synchronize: false,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
