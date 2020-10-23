export class Song {
    id: number;
    name: string;
    artist: string;
    kind: string;
    status: SongStatus;
  }

export enum SongStatus {
    init = 'Initialisation',
    compose = 'Composition',
    arragement = 'Arrangement',
    mixing = 'Mixing',
}