import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";
import {Request} from "express";

@Injectable()
export class JwtAuthGuards implements CanActivate {

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest() as Request
    try {
      const authToken = req.cookies.token

      if(!authToken) {
        throw new UnauthorizedException({message: 'You are not authorized, please login'})
      }
      return true
    } catch (e) {
      throw new UnauthorizedException({message: 'You are not authorized, please login'})
    }
  }

}
