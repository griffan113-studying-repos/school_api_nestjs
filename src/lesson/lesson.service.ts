import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Lesson } from "./lesson.entity";
import { v4 as uuid } from "uuid";
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
    });

    return this.lessonRepository.save(lesson);
  }

  public async getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ id });
  }

  public async getAllLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }
}
