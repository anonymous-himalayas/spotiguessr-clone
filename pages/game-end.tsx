import Link from "next/link";

export default function GameEnd() {
  return (
    <div>
      <div><Link href={'/'}>Home</Link></div>
      <br />
      <div><Link href={'/lobby'}>Lobby</Link></div>
    </div>
  );
}