import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Remote } from './remote.entity';
import { RemoteComponent } from './remote-component.entity';

@Entity({ name: 'remote_position' })
export class RemotePosition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  position: string;

  @OneToOne(() => RemoteComponent)
  @JoinColumn()
  remoteComponent: RemoteComponent;
}
