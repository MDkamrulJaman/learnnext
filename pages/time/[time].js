function time({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>this is is {post.id}</h1>
          <h2>this is tile {post.title}</h2>
          <h2>this is tile {post.body}</h2>
        </div>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const posts = await res.json();

  return {
    props: {
      posts,
    },

    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const post = await res.json();

  const paths = post.map((post) => ({
    params: { time: post.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export default time;
