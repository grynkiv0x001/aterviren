import { redirect } from "next/navigation";

import { auth } from "@/auth";

import {
  SpotifyPlaylistsResponse,
  SpotifyPlaylistsTrackResponse,
  SpotifyTrackResponse,
  SpotifyUser,
} from "@/src/types/spotify";
import { API_ENDPOINTS, ApiEndpoint } from "@/src/types/endpoints";

async function apiFetch<T>(endPoint: ApiEndpoint, id?: string, method?: 'GET' | 'POST'): Promise<T> {
  const session = await auth();

  if (!session) {
    redirect('/sign-in');
  }

  const response = await fetch(`https://api.spotify.com/v1${API_ENDPOINTS(id)[endPoint]}`, {
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

export async function getPlaylists(): Promise<SpotifyPlaylistsResponse> {
  return apiFetch<SpotifyPlaylistsResponse>('PLAYLISTS');
}

export async function getTracks(id: string): Promise<SpotifyPlaylistsTrackResponse> {
  return apiFetch<SpotifyPlaylistsTrackResponse>('PLAYLIST_TRACKS', id);
}
