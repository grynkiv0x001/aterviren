'use client';

import { redirect } from "next/navigation";

export const Track = ({ track }) => {
  const playTrack = async () => {
    redirect(`spotify:track:${track?.id}`);
  };

  return (
    <div className="flex items-center gap-8" onClick={playTrack}>
      <img src={track?.album?.images[2]?.url} alt=""/>
      <p>{track?.name}</p>
    </div>
  );
};
