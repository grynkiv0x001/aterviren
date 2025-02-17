'use client';

import { redirect } from "next/navigation";

import { SpotifyTrack } from "@/src/types/spotify";

export const Track = ({ id, album, name }: SpotifyTrack) => {
  const playTrack = async () => {
    redirect(`spotify:track:${id}`);
  };

  const img = album.images[2].url;

  return (
    <div
      className="flex items-center gap-4 p-3 rounded-lg cursor-pointer transition hover:bg-gray-800 hover:text-white hover:scale-105"
      onClick={playTrack}
    >
      <img src={img} alt="Track Image" className="w-12 h-12 rounded-md shadow-md" />
      <p className="text-lg font-medium">{name}</p>
    </div>
  );
};
