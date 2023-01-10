import { useLoaderData } from "@remix-run/react";
import { json, MetaFunction } from "@remix-run/node";

import { gql } from "graphql-request";
import { client } from "~/lib/graphql-client";

import Post from "~/components/Post";

export const meta: MetaFunction = () => {
  return {
    title: "Posts List Page",
    description: "Posts List Page",
  };
};

export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  published: any;
  user: string;
}

const GetAllPosts = gql`
  query {
    posts {
      id
      title
      content
      createdAt
      published
    }
  }
`;

export let loader = async () => {
  const data = await client.request(GetAllPosts);

  return json({ data });
};

export default function Posts() {
  let { data } = useLoaderData();

  console.log(data);
  console.log(typeof data.posts);

  return (
    <>
      {/* header */}
      <h1 className="text-center text-3xl mb-10 mt-52 sm:mt-28 md:mt-28">
        Posts
      </h1>

      {/* post listings */}
      <div className="w-7/12 min-w-min mx-auto">
        {data.posts.map((post: Post) => (
          <Post
            key={post.id}
            content={post.content}
            title={post.title}
            published={post.published}
            isMyProfile={true}
            date={post.createdAt}
            user={"Batman"}
          />
        ))}
      </div>
    </>
  );
}
