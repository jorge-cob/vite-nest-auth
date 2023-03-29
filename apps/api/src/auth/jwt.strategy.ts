import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'hide-me', // TODO: HIDE ME
    });
  }

  async validate(payload: any) {
    // payload = decoded JWT
    return {
      userId: payload.sub,
      username: payload.username,
    };
  }
}
