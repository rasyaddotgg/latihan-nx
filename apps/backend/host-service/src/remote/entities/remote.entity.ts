import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RemoteComponent } from './remote-component.entity';

@Entity({ name: 'remotes' })
export class Remote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  url: string;

  @OneToMany(() => RemoteComponent, (remoteComponent) => remoteComponent.remote)
  components: RemoteComponent[];
}
