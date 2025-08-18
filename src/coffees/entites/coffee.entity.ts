import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() // sql table ==='coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  name: string;
  @Column({ nullable: true })
  description: string;
  @Column()
  brand: string;
  // @Column("json", {nullable:true })
  @JoinTable() // says “Make a new table in the database to store which coffee has which flavors”.
  @ManyToMany(
    //says “Coffee and Flavor have a many-to-many relationship”.
    (type) => Flavor,
    (flavor) => flavor.coffees,
  ) //"Each coffee can have many flavors, each flavor can be in many coffees, and store those links in a separate table."
  flavors: string[];
}
