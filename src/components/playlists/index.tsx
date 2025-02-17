import { getPlaylists } from "@/src/lib/api";
import { Playlist } from "@/src/components";

export const Playlists = async () => {
  const playlists = await getPlaylists();

  return (
    <section className="mt-4">
      <h3 className="text-3xl">Playlists</h3>
      {playlists.items?.map((playlist) => (
        <Playlist key={playlist.id} {...playlist} />
      ))}
    </section>
  );
};
