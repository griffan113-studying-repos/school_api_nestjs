import { ValidationPipe } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { StudentDto } from "./models/student.dto";
import { Student } from "./student.entity";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  public async createStudent(
    @Args("createStudentDto") createStudentDto: StudentDto
  ) {
    return this.studentService.createStudent(createStudentDto);
  }

  @Query((returns) => [StudentType])
  public async getAllStudents(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  }

  @Query((returns) => StudentType)
  public async getStudentById(
    @Args("id", ValidationPipe) id: string
  ): Promise<Student> {
    return this.studentService.getStudentById(id);
  }
}
