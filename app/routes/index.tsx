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
      <h1 style={{textAlign: "center"}}>Remix + GraphQL</h1>

      <div style={{width: "16%", margin: "auto"}}>
        {posts.map(({ id, title, content, published }: Post) => (
          <div style={{textAlign: "left", marginBottom: "38px"}} key={id}>
            <p>ID: {id}</p>
            <p>{title}</p>
            <p>{content}</p>
            <p>Published: {published.toString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}