import { getPlaylists } from "@/src/lib/api";
import { Playlist } from "@/src/components";

export const Playlists = async () => {
  const playlists = await getPlaylists();

  return (
    <section>
      <p>Playlists</p>
      {playlists.items?.map((playlist) => (
        <Playlist key={playlist.id} {...playlist} />
      ))}
    </section>
  );
};
