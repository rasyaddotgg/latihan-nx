import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Remote } from './remote.entity';

@Entity({ name: 'remote_components' })
export class RemoteComponent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  path: string;

  @ManyToOne(() => Remote, (remote) => remote.components)
  remote: Remote;
}
