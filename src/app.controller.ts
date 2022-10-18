import { Body, Controller, Get, HttpCode, HttpStatus, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Produto } from './Produto/entities/produto.entity';

@Controller()
export class AppController {
  produtoService: any;
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.update(produto);
  
  }

}
