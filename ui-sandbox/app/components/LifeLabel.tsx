export default function LifeLabel({ text }: { text: string }) {
  return (
    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium inline-block mb-1">
      {text}
    </span>
  )
}
