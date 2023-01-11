import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
} from "@remix-run/react";

import MainNavigation from "~/components/MainNavigation";

export let meta: MetaFunction = () => {
  return {
    title: "Page Not Found",
    description: "Page Not Found",
  };
};

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <h1 className="text-center text-2xl mt-52 sm:mt-28 md:mt-28">Page Not Found</ h1>
      </body>
    </html>
  );
}