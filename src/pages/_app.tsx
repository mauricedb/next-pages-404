import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex gap-4 justify-around w-96 mx-auto">
        <Link href="/">Home</Link>
        <Link href="/nl">Nederlands</Link>
        <Link href="/en">English</Link>
        <Link href="/not-a-page">Oops</Link>
      </div>
      <Component {...pageProps} />;
    </>
  );
}
