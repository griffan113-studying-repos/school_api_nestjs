import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LessonResolver } from "./lesson.resolver";
import { LessonService } from "./lesson.service";
import { Lesson } from "./lesson.entity";

@Module({
  providers: [LessonResolver, LessonService],
  imports: [TypeOrmModule.forFeature([Lesson])],
})
export class LessonModule {}
