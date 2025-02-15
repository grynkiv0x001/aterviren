import { getTopTracks } from "@/src/lib/api";
import { Track } from "@/src/components";

export const TopTracks = async () => {
  const topTracks = await getTopTracks();

  return (
    <section>
      <p>Top Tracks</p>
      {topTracks.items?.map((track) => (
        <Track
          key={track.id}
          track={track}
        />
      ))}
    </section>
  );
};
