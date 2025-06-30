export default function PriceTag({ price, originalPrice }: { price: number; originalPrice?: number }) {
  const saving = originalPrice ? (originalPrice - price).toFixed(2) : null
  const pricePerKg = `${(price / 0.5).toFixed(2)} per kg` // replace logic based on weight if needed

  return (
    <div>
      <div className="flex gap-2 items-center">
        <span className="font-bold text-lg text-black">${price.toFixed(2)}</span>
        {saving && (
          <span className="bg-green-300 text-black text-xs font-semibold px-2 py-1 rounded-full">
            Save ${saving}
          </span>
        )}
      </div>
      <p className="text-xs text-gray-600">{pricePerKg}{originalPrice ? ` | Was $${originalPrice}` : ''}</p>
    </div>
  )
}
