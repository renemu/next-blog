import Head from "next/head";
import Link from "next/link";
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
    props: { post },
  };
}

function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} | Blog Mr. Zuli</title>
        <meta name="description" content={`Postingan: ${post.title}`} />
      </Head>
      <main className="container">
        <article>
          <h1>{post.title}</h1>
          <div className="content" dangerouslySetInnerHTML={{ __html: post.body }} />
        </article>

        <div className="back-link">
          <Link href="/">
            <span>← Back to Home</span>
          </Link>
        </div>
      </main>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 60px 20px;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background-color: #fefefe;
          min-height: 100vh;
        }

        h1 {
          font-size: 2.25rem;
          color: #1f2937;
          margin-bottom: 1.5rem;
        }

        .content :global(p) {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 1.25rem;
          color: #374151;
        }

        .content :global(h2) {
          font-size: 1.5rem;
          color: #111827;
          margin: 2rem 0 1rem;
        }

        .content :global(ul),
        .content :global(ol) {
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }

        .content :global(a) {
          color: #2563eb;
          text-decoration: none;
        }

        .content :global(a:hover) {
          text-decoration: underline;
        }

        .content :global(img) {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1rem 0;
        }

        .back-link {
          margin-top: 40px;
        }

        .back-link span {
          display: inline-block;
          padding: 10px 16px;
          background-color: #1e293b;
          color: #ffffff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 500;
          transition: background-color 0.2s ease;
        }

        .back-link span:hover {
          background-color: #0f172a;
        }
      `}</style>
    </>
  );
}

export default PostPage;
