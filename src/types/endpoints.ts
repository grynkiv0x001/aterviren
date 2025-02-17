export const API_ENDPOINTS = (id?: string) => ({
  USER: '/me',
  TOP_TRACKS: '/me/top/tracks',
  PLAYLISTS: '/me/playlists',
  PLAYLIST_TRACKS: `/playlists/${id}/tracks`,
}) as const;

export type ApiEndpoint = keyof ReturnType<typeof API_ENDPOINTS>;
