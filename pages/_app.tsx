import type { AppProps } from 'next/app';
import '../app/globals.css';
import Link from 'next/link';
import Button from '../app/components/Button'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-green-500 font-bold pt-10 text-8xl">Spotiguess</h1>
        <div className="fixed top-8 right-8">
          <Link href='/'><Button text={"Home"} /></Link>
        </div> 
        <div className="pt-16">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
