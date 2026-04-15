import Link from "next/link";
import Button from "../app/components/Button";
import PlayerCard from "../app/components/PlayerCard";
import { useState, useEffect } from "react";

export default function Lobby() {
  const [code, setCode] = useState('');
  useEffect(() => {
    setCode(Math.floor(Math.random() * 900000 + 100000).toString().split('').join(' '))
  }, []);

  const players = [
    { username: "Player1", profilePicture: "/placeholder.png" },
    { username: "Player2", profilePicture: "/placeholder.png" },
  ]

  return (
    <div className="pt-4 flex flex-col items-center">
      <h1 className="text-lg font-bold pb-4">Party Lobby</h1>
      <div className="h-px bg-gray-400/30 mb-6 w-170"></div>
      <div className="flex flex-col items-center h-full bg-gray-950 p-5 rounded-xl border border-gray-800 w-160">
        <h3 className="pb-2 text-gray-400 text-sm">ROOM CODE</h3>
        <p className="text-5xl text-green-500 font-bold pb-4">{code}</p>
        <div className="h-px bg-gray-400/30 mb-6 w-160"></div>
        {players.length < 2 && <p className="text-sm text-yellow-500 pb-4">At least 2 players are required to start the game.</p>}
        <div className="w-150">
          <Link href="/mid-round"><Button text="Start Game" disabled={players.length < 2} /></Link>
        </div>
      </div>
      <div>
        <p className="mt-6 self-start font-bold">Players ({players.length})</p>
        <div className="mt-2">
          {players.map((player) => (
            <PlayerCard key={player.username} username={player.username} profilePicture={player.profilePicture}/>
          ))}
        </div>  
      </div>
    </div>
  );
}