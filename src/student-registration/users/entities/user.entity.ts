import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bvn: number;

    @Column()
    nin: number;

    @Column()
    mobileNumber: number;

    @Column({ default: true })
    isActive: boolean;
    student: any
    }
