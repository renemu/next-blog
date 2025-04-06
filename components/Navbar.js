import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          background-color: #1e293b; /* dark slate */
          padding: 1rem 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        ul {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        li {
          margin-right: 1.5rem;
        }

        @media (max-width: 600px) {
          ul {
            gap: 0.75rem;
          }

          li {
            margin-right: 0;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
