import Head from "next/head";
import { getPost, getSlugs } from "../../lib/post";

export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    props: { post, slug },
  };
}

function PostPage({ post, slug }) {
  return (
    <>
      <Head>
        <title>{slug} Page</title>
      </Head>
      <main>
        {/* <h1>{post.title}</h1> */}
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default PostPage;
