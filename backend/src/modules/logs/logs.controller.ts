import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { LogsService } from './logs.service';
import { CreateLogDto } from './dto/create-log.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { LogLevel } from '../../common/enums/log.enum';

@Controller('logs')
@UseGuards(JwtAuthGuard)
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Post()
  create(@Body() createLogDto: CreateLogDto) {
    return this.logsService.create(createLogDto);
  }

  @Get()
  findAll(
    @Query('serviceId') serviceId?: string,
    @Query('level') level?: LogLevel,
    @Query('limit') limit?: string,
  ) {
    return this.logsService.findAll(serviceId, level, limit ? parseInt(limit) : 100);
  }
}
