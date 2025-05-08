export interface Remote {
  id: number;
  name: string;
  url: string;
}

export interface RemoteComponent {
  id: number;
  name: string;
  path: string;
  remote: Remote;
}

export interface RemotePosition {
  id: number;
  position: string;
  remoteComponent: RemoteComponent;
}
