import { redirect } from "next/navigation";

import { auth } from "@/auth";

import { TopTracks } from "@/src/components";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  const data = await fetch('https://api.spotify.com/v1/me', {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
  });

  const user = await data.json();

  if (!user) {
    return null;
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
