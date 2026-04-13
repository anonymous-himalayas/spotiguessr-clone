import Link from "next/link";

export default function CreateJoinGame() {
  return (
    <div>
      <Link href={'/lobby'}>
          Lobby
      </Link>
    </div>
  );
}