import Link from "next/link";
import Button from "../app/components/Button";

export default function CreateJoinGame() {
  return (
    <main className="max-w-2xl mx-auto p-10">
      <div className="grid gap-6 grid-cols-1">
        <Link href="/lobby"><Button text={"Host a Game"} /></Link>
        <Link href="/enter-code"><Button text={"Join a Game"} /></Link>
      </div>
    </main>
  );
}