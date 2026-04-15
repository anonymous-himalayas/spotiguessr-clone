type ButtonProps = {
  text:string;
  disabled?: boolean;
}

export default function Button({ text, disabled }: ButtonProps) {
  return (
    <div className={`bg-gray-900 px-5 py-2 rounded-xl border border-gray-800 transition duration-200 shadow-lg
                    ${disabled
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:border-green-500 hover:-translate-y-1 cursor-pointer'
                    }`}>
      <h3 className="text-lg font-semibold mb-1 flex justify-center items-center">{text}</h3>
    </div>
  )
}