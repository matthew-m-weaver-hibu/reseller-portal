import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  alias: string;

  @Column()
  street1: string;

  @Column()
  street2: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip: number;
}