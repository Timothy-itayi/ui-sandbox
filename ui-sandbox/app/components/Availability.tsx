export default function Availability({ isAvailable }: { isAvailable: boolean }) {
  if (isAvailable) return null
  return (
    <p className="text-red-600 text-xs flex items-center gap-1">
      <span className="w-2 h-2 bg-red-600 rounded-full inline-block" />
      Currently unavailable
    </p>
  )
}
