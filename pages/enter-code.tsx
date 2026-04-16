import Link from "next/link";
import CodeInput from "../app/components/CodeInput";
import Button from "../app/components/Button";
import { useState } from "react";

export default function EnterCode() {
  const [code, setCode] = useState("");
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Enter Room Code</h1>
      <p className="pt-4 pb-4 text-gray-500">Ask the host for the 6-digit code to join their party</p>
      <div>
        <CodeInput value={code} onChange={setCode} />
        <div className="h-14">
          {code.length === 11
            ? <Link href='/lobby'><Button text="Join Party" /></Link>
            : <Button text="Join Party" disabled />
          }
        </div>
      </div>
    </div>
  )
}