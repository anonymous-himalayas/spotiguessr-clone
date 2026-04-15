type PlayerCardProps = {
  username: string;
  profilePicture: string;
  score?: number;
}

export default function PlayerCard({username, profilePicture, score }: PlayerCardProps) {
  return (
    <div className="mt-2 flex items-center bg-gray-950 p-4 rounded-xl border border-gray-800 w-160">
      <img src={profilePicture} className="w-10 h-10 rounded-full mr-3" />
      <span>{username}</span>
      {score !== undefined && <span className="ml-auto">{score}</span>}
    </div>
  )
}