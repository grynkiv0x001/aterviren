import { auth } from "@/auth";

import { Track } from "@/src/components";

export const TopTracks = async () => {
  const session = await auth();

  const data = await fetch('https://api.spotify.com/v1/me/top/tracks', {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
  });

  const topTracks = await data.json();

  return (
    <section>
      <p>Top Tracks</p>
      {topTracks?.items?.map((track) => (
        <Track
          key={track.trackId}
          track={track}
        />
      ))}
    </section>
  );
};
