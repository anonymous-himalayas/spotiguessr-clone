import type { AppProps } from 'next/app';
import '../app/globals.css';
import Link from 'next/link';
import Button from '../app/components/Button'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="fixed top-4 right-4 w-40">
        <Link href='/'><Button text={"Home"} /></Link>
      </div>
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
    </>
  );
}
