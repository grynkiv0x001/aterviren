import { getTopTracks } from "@/src/lib/api";
import { Track } from "@/src/components";

export const TopTracks = async () => {
  const topTracks = await getTopTracks();

  return (
    <section className="mt-4">
      <h3 className="text-3xl">Top Tracks</h3>
      {topTracks.items?.map((track) => (
        <Track key={track.id} {...track} />
      ))}
    </section>
  );
};
