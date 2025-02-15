export const API_ENDPOINTS = {
  USER: '/me',
  TOP_TRACKS: '/me/top/tracks',
} as const;

export type ApiEndpoint = keyof typeof API_ENDPOINTS;
