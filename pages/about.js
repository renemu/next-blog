import Head from "next/head";

function AboutPage() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Tentang saya - Mr. Zuli" />
      </Head>
      <main className="about-container">
        <h1>👋 About Me</h1>
        <p>Halo! Saya adalah seorang developer yang sedang belajar dan eksplorasi teknologi web, khususnya menggunakan Next.js.</p>
        <p>Jika ingin terhubung atau melihat proyek-proyek saya lainnya, silakan kunjungi GitHub saya:</p>
        <a href="https://github.com/renemu" target="_blank" rel="noopener noreferrer" className="github-link">
          🌐 github.com/renemu
        </a>
      </main>

      <style jsx>{`
        .about-container {
          max-width: 700px;
          margin: 0 auto;
          padding: 60px 20px;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          background-color: #fdfdfd;
          min-height: 80vh;
        }

        h1 {
          font-size: 2.5rem;
          color: #1e293b;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .github-link {
          display: inline-block;
          margin-top: 10px;
          padding: 10px 16px;
          background-color: #1e293b;
          color: #ffffff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 500;
          transition: background-color 0.2s ease;
        }

        .github-link:hover {
          background-color: #0f172a;
        }
      `}</style>
    </>
  );
}

export default AboutPage;
