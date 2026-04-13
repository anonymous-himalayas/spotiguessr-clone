import Link from "next/link";

export default function Lobby() {
  return (
    <div>
      <Link href={'/mid-round'}>
          Mid-Round
      </Link>
    </div>
  );
}