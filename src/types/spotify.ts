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

export interface SpotifyPlaylist {
  description: string;
  href: string;
  id: string;
  name: string;
  public: boolean;
  images: { url: string }[];
}

export interface SpotifyPlaylistsResponse {
  items: SpotifyPlaylist[];
}

export interface SpotifyPlaylistsTrack {
  added_at: string;
  is_local: boolean;
  track: SpotifyTrack;
}

export interface SpotifyPlaylistsTrackResponse {
  items: SpotifyPlaylistsTrack[];
}
