import React from "react";
import Navigator from "../components/Navigator";

function calling({ blogs }) {
  return (
    <div>
      <Navigator />
      <h1>this the blog blogs</h1>

      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h1>{blog.id}</h1>
            <h5>{blog.title}</h5>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default calling;

// export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const blogs = await res.json();

  return {
    props: {
      blogs,
    },
  };
}
