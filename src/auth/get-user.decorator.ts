import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Utilisateur } from 'src/utilisateurs/entities/utilisateur.entity';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): Utilisateur => {
    const req = ctx.switchToHttp().getRequest();
    return req.user; // NE PAS RENOMMER
    // c'est toujours la propriété user de req que l'on retourne
  },
);
