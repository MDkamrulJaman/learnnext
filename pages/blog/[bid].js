import React from "react";

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: {
      bid: post.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

function SinglePage({ post }) {
  return (
    <div>
      <h1>this is my staticsingle page path</h1>
      <h3>{post.title}</h3>
      <h3>{post.body}</h3>
    </div>
  );
}

export default SinglePage;

export const getStaticProps = async (ctx) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.bid}`);

  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};
