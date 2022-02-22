import { Column, Entity, JoinColumn, OneToOne,PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/student-registration/users/entities/user.entity";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({nullable: true})
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    countryofBirth: string;

    @Column({default: new Date().getFullYear()})
    dateofBirth: number;

    @Column()
    nationality: string;

    @Column()
    townofBirth: string;

    @Column()
    stateofBirth: string;

    @Column()
    residenceAddress: string;

    @Column()
    profession: string;


    @JoinColumn()
    @OneToOne(type => User, user => user.student, {cascade:true})
    user: User;
    }

    