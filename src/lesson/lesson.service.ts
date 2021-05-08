import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { v4 as uuid } from "uuid";

import { Lesson } from "./lesson.entity";
import { LessonsDto } from "./models/lesson.dto";

/*
 * In this case we don't create a customized repository.
 */

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>
  ) {}

  public async createLesson(lessonsDto: LessonsDto): Promise<Lesson> {
    const { name, startDate, endDate } = lessonsDto;

    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students: [],
    });

    return this.lessonRepository.save(lesson);
  }

  public async getLesson(id: string): Promise<Lesson> {
    const getLesson = await this.lessonRepository.findOne({ id });

    if (!getLesson) throw new NotFoundException();

    return getLesson;
  }

  public async getAllLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }

  public async assignStudentsToLesson(lessonId: string, studentsIds: string[]) {
    const lesson = await this.lessonRepository.findOne({ id: lessonId });
    lesson.students = [...lesson.students, ...studentsIds];

    return this.lessonRepository.save(lesson);
  }
}
