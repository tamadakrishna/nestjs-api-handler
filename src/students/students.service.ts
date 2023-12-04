import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
    private students = [
        {
            "id":1,
            "name":"Krishna",
            "branch":"cse",
            "year":"3rd",            
        },
        {
            "id":2,
            "name":"Srinu",
            "branch":"cse",
            "year":"4th",            
        }
    ];

    getAll(){
        return this.students;
    }
}
