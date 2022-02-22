export class CreateUserDto {
    readonly bvn: number;
    readonly nin: number;
    readonly mobileNumber: number;
    readonly isActive?: boolean;
}
