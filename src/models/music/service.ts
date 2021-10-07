import SongTypes from './song';

export interface MusicService {
  name: string;
  iconPath: string;
  link: string;

  login: () => JSX.Element;
  logout: () => boolean;
  isLoggedIn: () => boolean;
  play: () => boolean;
  pause: () => boolean;
  queueSongType: (songType: SongTypes) => boolean;
}
