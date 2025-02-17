'use client';

import { useRouter } from "next/navigation";

import { SpotifyPlaylist } from "@/src/types/spotify";

export const Playlist = ({ id, name, images }: SpotifyPlaylist) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/tracks/${id}`)}>
      <img src={images[2]?.url} alt="" />
      <p>{name}</p>
    </div>
  );
};
