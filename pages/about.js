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
        <p>Hello! I am a developer who is learning and exploring web technology, especially using Next.js.</p>
        <p>If you want to connect or see my other projects, please visit my GitHub:</p>
        <div className="github-wrapper">
          <a href="https://github.com/renemu" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src="https://github.com/fluidicon.png" alt="GitHub" className="icon" /> github.com/renemu
          </a>
        </div>
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
        .github-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }
        .github-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background-color: #1e293b;
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 500;
          transition: background-color 0.2s ease;
        }
        .icon {
          width: 20px;
          height: 20px;
          display: inline-block;
        }
        .github-link:hover {
          background-color: #0f172a;
        }
        span {
          line-height: 1;
        }
      `}</style>
    </>
  );
}

export default AboutPage;
