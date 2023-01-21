import React from "react";
import Link from "next/link";

function Page({ posts }) {
  return (
    <div>
      <h1>this the blog post</h1>

 
      {posts.map((post, index) => {
        return (
          <div key={post.id}>
            <Link href={`/time/${post.id}`} passHref>
              <h5>
                {" "}
                {post.id}this is the post title {post.title}
              </h5>
            </Link>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Page;

// export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }

export async function getStaticProps(ctx) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
