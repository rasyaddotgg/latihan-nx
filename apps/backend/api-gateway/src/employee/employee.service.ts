import { Inject, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { EMPLOYEE_SERVICE } from '../constant/service-name';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(EMPLOYEE_SERVICE)
    private readonly clientProxy: ClientProxy
  ) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

  findAll(): Observable<any> {
    return this.clientProxy.send('findAllEmployee', {});
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
