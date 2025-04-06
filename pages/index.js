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
        <title>Next Blog Learning</title>
        <meta name="description" content="Website belajar Next.js oleh Mr. Zuli" />
      </Head>

      <main className="container">
        <h1>✨ Next.js Blog Learning</h1>
        <p className="subtitle">Catatan pribadi belajar Next.js oleh Mr. Zuli</p>

        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug} className="post-card">
              <Link href={`/posts/${post.slug}`}>
                <div className="card-content">
                  <h2>{post.title}</h2>
                  <p className="read-more">Baca selengkapnya →</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          min-height: 100vh;
        }

        h1 {
          text-align: center;
          font-size: 2.5rem;
          color: #333;
        }

        .subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 40px;
        }

        .post-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .post-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }

        .post-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
        }

        .card-content {
          padding: 20px;
        }

        .card-content h2 {
          margin: 0;
          font-size: 1.2rem;
          color: #0070f3;
        }

        .read-more {
          color: #555;
          font-size: 0.9rem;
          margin-top: 8px;
        }
      `}</style>
    </>
  );
}

export default HomePage;
