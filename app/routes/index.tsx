import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { gql } from "graphql-request";

import { client } from "~/lib/graphql-client";

export interface Post {
  id: string,
  title: string,
  content: string,
  published: boolean,
}

const GetAllPosts = gql`
  {
    posts {
      id
      title
      content
      published
    }
  }
`;

export let loader = async () => {
  const { posts } = await client.request(GetAllPosts);

  return json({ posts });
};

export let meta = () => {
  return {
    title: "Remix-TypeScript + GraphQL",
    description: "Remix-TypeScript + GraphQL",
  };
};

export default function Index() {
  let { posts } = useLoaderData();

  return (
    <div>
      <h1 className="text-center text-3xl my-8">Remix + GraphQL</h1>

      <div className="w-80 mx-auto text-lg">
        {posts.map(({ id, title, content, published }: Post) => (
          <div className="text-left my-9" key={id}>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Content: {content}</p>
            <p>Published: {published.toString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}