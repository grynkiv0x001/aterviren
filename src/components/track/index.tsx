'use client';

import { redirect } from "next/navigation";

import { SpotifyTrack } from "@/src/types/spotify";

export const Track = ({ id, album, name }: SpotifyTrack) => {
  const playTrack = async () => {
    redirect(`spotify:track:${id}`);
  };

  const img = album.images[2].url;

  return (
    <div className="flex items-center gap-8" onClick={playTrack}>
      <img src={img} alt="Track Image" />
      <p>{name}</p>
    </div>
  );
};
