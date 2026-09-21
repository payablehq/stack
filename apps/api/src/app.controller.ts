import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service.js';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './users/dto/create-user.dto.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @ApiOperation({
    summary: 'Create a user',
  })
  @ApiResponse({
    status: 201,
    description: 'User created successfully.',
  })
  create(@Body() dto: CreateUserDto) {
    return dto;
  }
}
