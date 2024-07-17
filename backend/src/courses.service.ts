import { Injectable } from '@nestjs/common';
import { Course } from './interfaces/courses.interface'

@Injectable()
export class CoursesService {
    async findAll(): Promise<Course[]> {
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