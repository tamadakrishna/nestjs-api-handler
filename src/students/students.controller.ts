import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('students')
export class StudentsController {

    @Get()  // GET /students
    getAll(){
        return []
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
