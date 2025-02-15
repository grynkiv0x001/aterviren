'use client';

import { redirect } from "next/navigation";

import { SpotifyTrack } from "@/src/types/spotify";

type TrackProps = {
  track: SpotifyTrack;
}

export const Track = ({ track }: TrackProps) => {
  const playTrack = async () => {
    redirect(`spotify:track:${track.id}`);
  };

  const img = track.album.images[2].url;

  return (
    <div className="flex items-center gap-8" onClick={playTrack}>
      <img src={img} alt="Track Image"/>
      <p>{track.name}</p>
    </div>
  );
};
