import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get()
  findAll(): any {
    return [
      {
        id: '100',
        number: '01204111',
        title: 'Compoter and Programing'
      },
      {
        id: '324bvf',
        number: '01204132',
        title: 'Discreate mathematics and linear algebra'
      },
      {
        id: '552kjh',
        number: '01204156',
        title: 'Design and analysis of algorithms'
      }
    ];
  }
}
