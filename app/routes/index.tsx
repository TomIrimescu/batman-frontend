import { MetaFunction } from "@remix-run/node";
import { useCatch } from "@remix-run/react";

import NotFound from "~/components/NotFound";

export let meta: MetaFunction = () => {
  return {
    title: "Remix + TypeScript + Tailwind",
    description: "Remix + TypeScript + Tailwind",
  };
};

export default function Index() {
  return (
    <>
      {/* header */}
      <h1 className="text-center text-2xl mt-52 sm:mt-28 md:mt-28">
        Remix + TypeScript + Tailwind
      </h1>
    </>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <NotFound />;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
