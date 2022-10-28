import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  async register(@Body() req: CreateRegisterDto): Promise<string> {
    return this.registerService.register(req);
  }
  async update(id: number, req: UpdateRegisterDto): Promise<string> {
    return `Usuário ${id} atualizado com sucesso!`;
}
}