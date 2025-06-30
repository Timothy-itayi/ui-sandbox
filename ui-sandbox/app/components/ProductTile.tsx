'use client'

import Image from 'next/image'
import Badge from './Badge'
import PriceTag from './PriceTag'
import Rating from './Rating'
import AddButton from './AddButton'
import Availability from './Availability'
import LifeLabel from './LifeLabel'

export interface ProductTileProps {
  imageUrl: string
  title: string
  weight: string
  price: number
  originalPrice?: number
  rating?: number
  ratingCount?: number
  badges?: string[]
  isAvailable?: boolean
  isLowStock?: boolean
  boughtBefore?: boolean
  lifeText?: string
  promoText?: string
  alt?: string
}

export default function ProductTile({
  imageUrl,
  title,
  weight,
  price,
  originalPrice,
  rating,
  ratingCount,
  badges = [],
  isAvailable = true,
  isLowStock = false,
  boughtBefore = false,
  lifeText,
  promoText,
  alt,
}: ProductTileProps) {
  return (
    <article className="w-full max-w-xs p-4 rounded-xl border shadow-sm bg-white flex flex-col text-sm min-h-[480px]">
      {/* Top: Image & Badges */}
      <div className="relative mb-2">
        {badges.includes('onlineOnly') && <Badge  />}
        {badges.includes('special') && (
          <div className="absolute top-0 left-0 bg-yellow-400 text-black text-xs font-semibold px-2 py-1">
            Special
          </div>
        )}
        <Image
          src={imageUrl}
          alt={alt ?? title}
          width={200}
          height={200}
          className="object-contain mx-auto"
        />
      </div>

      {/* Life Label (always render placeholder to maintain spacing) */}
      <div className="h-[20px] m-3">
        
      </div>

      {/* Title + Weight */}
      <h2 className="font-medium min-h-[40px] text-black leading-snug">{title}</h2>
      <p className="text-gray-500 mb-1">{weight}</p>

      {/* Price */}
      <PriceTag price={price} originalPrice={originalPrice} />

      {/* Rating (reserved height) */}
      <div className="h-[24px]">
        {rating ? (
          <Rating value={rating} count={ratingCount ?? 0} isLowStock={isLowStock} />
        ) : (
          <div className="invisible">no rating</div>
        )}
      </div>

      {/* Bought before (reserved height) */}
      <div className="h-[20px]">
        {boughtBefore ? (
          <p className="text-blue-600 text-xs font-semibold">Bought before</p>
        ) : (
          <div className="invisible">placeholder</div>
        )}
      </div>

      {/* Availability + Button always at bottom */}
      <div className="mt-auto flex flex-col gap-1 pt-2">
        <Availability isAvailable={isAvailable} />
        <AddButton isAvailable={isAvailable} />
      </div>
    </article>
  )
}
