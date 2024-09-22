// src/app/layout.jsx
import Link from 'next/link';
import './globals.css'; // Import your global styles

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Sri Lankan Plantations</h1>
          {/* Navigation Links */}
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/plantations">Plantations</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Sri Lankan Plantations. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
