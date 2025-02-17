import { getTracks } from "@/src/lib/api";
import { Track } from "@/src/components";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const data = await getTracks(id);

  if (!data || !data.items) {
    return null;
  }

  return (
    <main className="flex flex-col justify-center items-center">
      <h2>Tracks</h2>

      <div>
        {data.items?.map(({ track }) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </main>
  );
}
