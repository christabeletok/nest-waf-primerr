import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    bvn: string;

    @Column({nullable: true})
    nin: string;

    @Column({nullable: true})
    mobileNumber: string;

    @Column({ default: true })
    isActive: boolean;

    student: any
    }
