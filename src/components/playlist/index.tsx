'use client';

import { useRouter } from "next/navigation";

import { SpotifyPlaylist } from "@/src/types/spotify";

export const Playlist = ({ id, name, images }: SpotifyPlaylist) => {
  const router = useRouter();

  const img = images[2]?.url;

  return (
    <div
      className="flex items-center gap-4 p-3 rounded-lg cursor-pointer transition hover:bg-gray-800 hover:scale-105"
      onClick={() => router.push(`/tracks/${id}`)}
    >
      <img src={img} alt="Playlist Cover" className="w-12 h-12 rounded-md shadow-md" />
      <p className="text-white text-lg font-medium">{name}</p>
    </div>
  );
};
