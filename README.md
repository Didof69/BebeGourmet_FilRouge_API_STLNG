# NEST : pas à pas configuration

## Etape 1 : A faire une seule fois 
```bash
$ npm i -g @nestjs/cli
```

## Etape 2 : ouverture d'un nouveau projet

```bash
$ nest new nom-projet
```

=> Choisir npm

_nb: pas besoin de git init, c'est automatique_

## Etape 3 : Se mettre dans le dossier nom-projet

## Etape 4 : générer une ressource
```bash
$ nest g res nom-ressources
```

=>choisir REST API
=>CRUD? Y

_nb: DTO : similaire à MODEL dans NODEJS, il va définir ce les champs attentdus dans une méthode_

## Etape 5 : installer TypeORM et Postgres

```bash
$ npm i @nestjs/typeorm typeorm pg
```

_nb: pg = postgres_

## Etape 6 : installer package pour lire `.env`
```bash
$ npm i --save @nestjs/config
```

_nb: equivalence dotenv dans nodejs_

## Etape 7 : dans app.module.ts, configurer imports
```
@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:[`.env`]}), PlantsModule, 
    TypeOrmModule.forRoot({
        type: 'postgres', 
        host: 'localhost', 
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        entities: [Plant], 
        synchronize: false,
    }),    
  ],
  ...
})
```

_nb: si pas d'import automatique :_
```
import { TypeOrmModule } from '@nestjs/typeorm'_
```

_nb2: autoloadEntities : true, = entities: []_


## Etape 8 : Créer un fichier `.env` à la racine
```
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=mot_de_passe
POSTGRES_DATABASE=nom_database
```

_nb: ajouter .env dans .gitignore pour que notre mot de passe ne soit pas devoilé_

## Etape 8 : dans main.ts, configurer le préfixe global de l'api dans async function bootstrap(){}
```
app.setGlobalPrefix('api'),
```

## Etape 9 : dans plants.module.ts, importer TypeORMModule
```
@Module({
  imports: [TypeOrmModule.forFeature([Plant])],
  ...
})
```

_nb: si pas d'import automatique :_
```
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from './entities/plant.entity';
```

## Etape 10 : dans plant.entity.ts, définir notre entité Plant
```
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nom: string;

  @Column()
  soleil: string;

  @Column('int')
  arrosage: number;

  @Column({ length: 500 })
  categorie: string;

  @Column({ length: 500 })
  image: string;
}
```

_nb: ({ length: 500 }) = contrainte_

## Etape 11 : créer nos DTO
### dans create-plant.dto.ts
```
export class CreatePlantDto {
  nom: string;
  soleil: string;
  arrosage: number;
  categorie: string;
  image: string;
}
```

### dans update-plant.dto.ts
=>herite des propriétés de CreatePlantDto
=>si on veut choisir les propriétés que l'on peut modifier on les notifie ici

## Etape 12 : dans plants.service.ts
###  créer le contructor
```
  constructor(
    @InjectRepository(Plant) private plantsRepository: Repository<Plant>,
  ) { }
```

_nb: si pas d'import automatique :_
```
import { InjectRepository } from '@nestjs/typeorm';
import { Plant } from './entities/plant.entity';
import { Repository } from 'typeorm';
```

### toutes les fonctions sont ASYNC

###  pour ce projet, le create :
```
  async create(createPlantDto: CreatePlantDto) {
    const plant = this.plantsRepository.create(createPlantDto);
    const result = await this.plantsRepository.save(plant);
    return result;
  }
```

## Etape 13 : lancer mon API
```bash
$ npm run start:dev
```


# Cors

## Dans main.ts :
```
app.enableCors();
```


# ClassValidator

## Etape 1 : installer Class-Validator :
```bash
npm i --save class-validator class-transformer
```

## Etape 2 : dans main.ts :
```
app.useGlobalPipes(new ValidationPipe());
```

=>indique à NestJs qu'il va devoir checker les entrées avec class-validator

_nb: si pas d'import automatique :_
```
import { ValidationPipe } from '@nestjs/common';
```

## Etape 3 : paramétrer le DTO :
```
export class CreatePlantDto {
  @IsNotEmpty() //décorateur class-validator
  nom: string;

  ...
}
```

_nb: si pas d'import automatique des décorateurs:_
```
import { IsNotEmpty } from "class-validator";
```
# Swagger

## Etape 1 : installer les modules
```bash
npm install --save @nestjs/swagger
```

## Etape 2 : dans le main.ts, configurer Swagger
```
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nom de l'appli')
    .setDescription('Description de l'Api')
    .setVersion('1.0')
    .addTag('tags')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
```

_nb: si pas d'import automatique :_
```
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
```

=> Quand l'API est lancée, les infos Swagger sont disponibles sur l'adresse :http://localhost:3000/api-docs

## Etape 3 : paramétrage affichage navigateur
### DTOs
=>permettre à Swagger d'afficher les modèles DTO:
ajouter le décorateur @ApiProperty() devant chaque propriété à afficher

```
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
```

### Controllers
=>mettre en page la doc en séparant par un tag les verbes HTTP:
ajouter le décorateur @ApiTags('Tag souhaité')

``` 
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users Controller')
export class UsersController {}

```
# Authentification

Voir le tuto de Jeremy
https://dev-formation.notion.site/TP-Authentification-et-Autorisation-NestJs-ff3439be72124e7eb0faf1237b1890a7