import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentsService } from './students.service';
@Controller('students')
export class StudentsController {

    constructor(private readonly studentsService: StudentsService){}

    @Get()  // GET /students
    getAll(){
        return this.studentsService.getAll();
    }

    @Get(':id') // GET  /students/:id
    getOne(@Param('id') id: string){
        return { id }
    } 

    @Post() //POST /students
    create(@Body() student: {}){
        return student
    }

    @Patch(':id') //PATCH /students/:id
    updateStudent(@Param('id') id: string, @Body() studentUpdate: {}){
        return {id, ...studentUpdate}
    }

    @Delete(':id') //DELETE /students/:id
    deleteStudent(@Param('id') id: string){
        return { id }
    }
}
