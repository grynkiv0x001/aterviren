import { redirect } from "next/navigation";

import { TopTracks } from "@/src/components";
import { getUser } from "@/src/lib/api";

export default async function Home() {
  const user = await getUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      aterviren project (simple Spotify library client)

      <main className="flex flex-col">
        <h1 className="text-5xl">Hello, {user.display_name}</h1>
        <TopTracks/>
      </main>
    </div>
  );
}
