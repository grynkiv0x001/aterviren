import { redirect } from "next/navigation";

import { Playlists, TopTracks } from "@/src/components";
import { getUser } from "@/src/lib/api";

export default async function Home() {
  const user = await getUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <main className="flex flex-col">
        <h1 className="text-5xl">Hello, {user.display_name}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TopTracks />
          <Playlists />
        </div>
      </main>
    </div>
  );
}
