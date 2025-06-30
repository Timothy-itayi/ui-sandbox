export default function Rating({ value, count, isLowStock }: { value: number; count: number; isLowStock: boolean }) {
  return (
    <div className="text-sm flex items-center gap-1 mt-1">
      <span className="text-red-500">★★★★☆</span>
      <span>{value.toFixed(1)}</span>
      <span className="text-gray-500">({count})</span>
      {isLowStock && <span className="text-orange-600 text-xs ml-2">Low stock</span>}
    </div>
  )
}
