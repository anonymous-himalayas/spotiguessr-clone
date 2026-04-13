import Link from "next/link";

export default function BetweenRounds() {
  return (
    <div>
      <div><Link href={'/mid-round'}>Mid-Round</Link></div>
      <br />
      <div><Link href={'/game-end'}>Game End</Link></div>
    </div>
  );
}