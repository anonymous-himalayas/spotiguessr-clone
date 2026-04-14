export default function Button({ text }: {text: string}) {
  return (
    <div className="h-full bg-gray-900 p-5 rounded-xl border border-gray-800
                    hover:border-green-500 hover:-translate-y-1
                    transition duration-200 shadow-lg">
      <h3 className="text-lg font-semibold mb-1 flex justify-center items-center">{text}</h3>
    </div>
  )
}