import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from './log.entity';
import { CreateLogDto } from './dto/create-log.dto';
import { LogLevel } from '../../common/enums/log.enum';

@Injectable()
export class LogsService {
  constructor(
    @InjectRepository(Log)
    private logsRepository: Repository<Log>,
  ) {}

  async create(createLogDto: CreateLogDto): Promise<Log> {
    const log = this.logsRepository.create(createLogDto);
    return this.logsRepository.save(log);
  }

  async findAll(
    serviceId?: string, 
    level?: LogLevel,
    limit: number = 100,
  ): Promise<Log[]> {
    const query = this.logsRepository.createQueryBuilder('log')
      .leftJoinAndSelect('log.service', 'service')
      .orderBy('log.createdAt', 'DESC')
      .take(limit);

    if (serviceId) {
      query.where('log.serviceId = :serviceId', { serviceId });
    }

    if (level) {
      query.andWhere('log.level = :level', { level });
    }

    return query.getMany();
  }

  async findByService(serviceId: string, limit: number = 50): Promise<Log[]> {
    return this.logsRepository.find({
      where: { serviceId },
      order: { createdAt: 'DESC' },
      take: limit,
    });
  }
}
