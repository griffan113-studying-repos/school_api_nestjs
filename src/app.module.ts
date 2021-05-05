import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Lesson } from "./lesson/lesson.entity";
import { LessonModule } from "./lesson/lesson.module";
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: "mongodb://localhost/school",
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Lesson],
    }),

    LessonModule,

    StudentModule,
  ],
  providers: [StudentService],
})
export class AppModule {}
