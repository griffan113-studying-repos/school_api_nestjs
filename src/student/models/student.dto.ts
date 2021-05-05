import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsDateString, IsNotEmpty, MinLength } from "class-validator";

@InputType()
export class StudentDto {
  @Field()
  @MinLength(1)
  firstname: string;

  @Field()
  @MinLength(1)
  lastname: string;
}
