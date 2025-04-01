import Link from "next/link";

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link href="/">
        <a style={{ color: '#0070f3', textDecoration: 'underline' }}>Go back to Home</a>
      </Link>
    </div>
  );
}
