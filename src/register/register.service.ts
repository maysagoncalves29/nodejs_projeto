import { Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';

@Injectable()
export class RegisterService {
  async register(req: CreateRegisterDto): Promise<string> {
    return `Cliente ${req.name} criado com sucesso!`;
  }
}
