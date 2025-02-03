import { redirect } from "next/navigation";

import { signIn } from "@/auth"

const SignIn = () => {
  return (
    <form
      className="flex flex-col items-center justify-center h-screen"
      action={async () => {
        'use server';

        await signIn('spotify').then(() => redirect('/'));
      }}
    >
      <h1 className="mb-4">Sign in</h1>
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded"
        type="submit"
      >
        Sign in with Spotify
      </button>
    </form>
  );
}

export default SignIn;
