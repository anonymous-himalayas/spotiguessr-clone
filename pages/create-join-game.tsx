import Link from "next/link";
import Button from "../app/components/Button";
import SpotifyRain from "../app/components/SpotifyRain";

export default function CreateJoinGame() {
  return (
    <div>
    <SpotifyRain />
    <div className="grid gap-6 grid-cols-1 max-w-2xl mx-auto p-10">
      <Link href="/lobby"><Button text={"Host a Game"} /></Link>
      <Link href="/enter-code"><Button text={"Join a Game"} /></Link>
    </div>
    </div>
  );
}