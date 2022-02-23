import { CreateUserDto } from "src/student-registration/users/dto/create-user.dto";


export class CreateStudentDto {

    readonly firstName: string;
    readonly middleName?: string;
    readonly lastName: string;
    readonly countryofBirth: string;
    readonly dateOfBirth: Date;
    readonly nationality: string
    readonly townofBirth: string
    readonly stateofBirth: string
    readonly residenceAddress: string
    readonly profession: string
    readonly user: CreateUserDto;
   
    }
