import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwindStyles from "./styles/tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwindStyles,
    },  
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />       
      </head>
      <body className="max-h-screen bg-gradient-to-r from-jokes-500 via-purple-500 to-indigo-500 text-white">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
