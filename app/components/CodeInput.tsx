type CodeInputProps = {
  value:string;
  onChange: (value: string) => void;
}

export default function CodeInput({ value, onChange }: CodeInputProps) {
  return (
    <input 
      className="w-full max-w-sm mb-8 px-4 py-3 rounded-lg
                 bg-gray-900 text-white border border-gray-700
                 focus:outline-none focus:ring-2 focus:ring-green-500
                 text-center tracking-widest w-48 h-20 text-4xl"
      type="text"
      placeholder="0 0 0 0 0 0"
      maxLength={11}
      value={value}
      onChange={(e) => {
        const digits = e.target.value.replace(/\D/g, '').slice(0, 6);
        onChange(digits.split('').join(' '));
      }}
    />
  )
}