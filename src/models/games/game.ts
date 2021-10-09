export interface Game {
  name: string;
  url: string;

  /** isPlaying: Returns true if the game is currently being played. */
  isPlaying: () => boolean;
  /** play: Handles synching to the game playing and changing song type accordingly. */
  play: () => void;
}
