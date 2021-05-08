import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LessonsDto } from "./models/lesson.dto";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";
import { AssignStudentsToLessonDto } from "./models/assignStudentsToLesson.dto";

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query((returns) => LessonType)
  public lesson(@Args("id") id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query((returns) => [LessonType])
  public getAllLessons() {
    return this.lessonService.getAllLessons();
  }

  @Mutation((returns) => LessonType)
  public createLesson(@Args("lessonsDto") lessonsDto: LessonsDto) {
    return this.lessonService.createLesson(lessonsDto);
  }

  @Mutation((returns) => LessonType)
  public assignStudentsToLesson(
    @Args("assignStudentsToLessonDto")
    assignStudentsToLessonDto: AssignStudentsToLessonDto
  ) {
    const { lessonId, studentIds } = assignStudentsToLessonDto;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }
}
