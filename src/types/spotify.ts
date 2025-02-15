export interface SpotifyTrack {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
}

export interface SpotifyTrackResponse {
  items: SpotifyTrack[];
}

export interface SpotifyUser {
  id: string;
  display_name: string;
  href: string;
  followers: {
    total: number;
  };
}
