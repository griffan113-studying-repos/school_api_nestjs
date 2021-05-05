import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { StudentDto } from "./models/student.dto";
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
}
