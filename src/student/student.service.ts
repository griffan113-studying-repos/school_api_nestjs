import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { v4 as uuid } from "uuid";

import { Student } from "./student.entity";
import { StudentDto } from "./models/student.dto";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>
  ) {}

  public async createStudent(studentDto: StudentDto): Promise<Student> {
    const { firstname, lastname } = studentDto;
    const student = this.studentRepository.create({
      id: uuid(),
      firstname,
      lastname,
    });

    return this.studentRepository.save(student);
  }

  public async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  public async getStudentById(id: string): Promise<Student> {
    const getStudent = await this.studentRepository.findOne({ id });

    if (!getStudent) throw new NotFoundException();

    return getStudent;
  }
}
