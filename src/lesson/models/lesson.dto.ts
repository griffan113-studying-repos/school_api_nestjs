import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsDateString, IsNotEmpty, MinLength } from "class-validator";

@InputType()
export class LessonsDto {
  /*   @Field()
  id?: string; */

  @Field()
  @MinLength(1)
  name: string;

  @Field()
  @IsDateString()
  startDate: string;

  @Field()
  @IsDateString()
  endDate: string;
}
