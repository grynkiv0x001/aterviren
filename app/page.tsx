import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  const data = await fetch('https://api.spotify.com/v1/me', {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.access_token}`
    }
  })

  const user = await data.json();

  if (!user) {
    return null;
  }

  console.log('user: ', user);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      aterviren project

      <main className="flex">
        <h1 className="text-5xl">Hello, {user.display_name}</h1>
      </main>
    </div>
  );
}
