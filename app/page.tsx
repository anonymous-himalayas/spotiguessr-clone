
import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import SpotifyRain from "./components/SpotifyRain";

export default function Home() {
  return (
    <div>
      <SpotifyRain />
      <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-green-500 font-bold pt-8 text-8xl pb-8 bg-[#0a0a0a] rounded-xl">Spotiguess</h1>
        <Link className="pt-16 pb-6" href="/create-join-game"><Button text="Get Started" /></Link>
        <Button text="Sign In" />
      </div>
    </div>
  );
}
