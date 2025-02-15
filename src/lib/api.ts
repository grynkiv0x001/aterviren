import { auth } from "@/auth";

import { SpotifyTrackResponse, SpotifyUser } from "@/src/types/spotify";
import { API_ENDPOINTS, ApiEndpoint } from "@/src/types/endpoints";

async function apiFetch<T>(endPoint: ApiEndpoint, method?: 'GET' | 'POST'): Promise<T> {
  const session = await auth();

  if (!session) {
    throw new Error('Session is missing');
  }

  const response = await fetch(`https://api.spotify.com/v1${API_ENDPOINTS[endPoint]}`, {
    method,
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch "${endPoint}"`);
  }

  return response.json();
}

export async function getUser(): Promise<SpotifyUser> {
  return apiFetch<SpotifyUser>('USER');
}

export async function getTopTracks(): Promise<SpotifyTrackResponse> {
  return apiFetch<SpotifyTrackResponse>('TOP_TRACKS');
}
