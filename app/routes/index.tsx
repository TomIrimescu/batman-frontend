import { MetaFunction } from "@remix-run/node";

export let meta: MetaFunction = () => {
  return {
    title: "Remix + TypeScript + GraphQL + Tailwind",
    description: "Remix + TypeScript + GraphQL + Tailwind",
  };
};

export default function Index() {
  return (
    <>
      {/* header */}
      <h1 className="text-center text-2xl mt-52 sm:mt-28 md:mt-28">
        Remix + TypeScript + GraphQL + Tailwind
      </h1>
    </>
  );
}
