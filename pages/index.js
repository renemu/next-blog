import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/post";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}
function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" value="website mr zuli" />
      </Head>
      <main>
        <h1>Next Blog Learning</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
