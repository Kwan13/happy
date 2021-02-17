import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import Image from './Image';

@Entity('orphanages')
class Orphanage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  about: string;

  @Column()
  whatsapp: string;

  @Column('decimal')
  latitude: number;

  @Column('decimal')
  longitude: number;

  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update'],
    eager: true,
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[];

  @Column()
  instructions: string;

  @Column('boolean')
  open_on_weekends: boolean;

  @Column()
  opening_hours: string;
}

export default Orphanage;
