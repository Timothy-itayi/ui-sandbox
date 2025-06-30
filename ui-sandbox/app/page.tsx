import ProductTile from '@/app/components/ProductTile'
import styles from '@/app/styles/ProductGrid.module.css'


const products = [
  {
    imageUrl: '/assets/food00.jpg',
    title: 'Japanese Milk Bread ',
    weight: '200g',
    price: 5.0,
    originalPrice: 10.0,
    rating: 3.9,
    ratingCount: 176,
    badges: ['special'],
    isAvailable: true,
    isLowStock: false,
    boughtBefore: false,
    lifeText: 'Life 5 days min',
  },
  {
    imageUrl: '/assets/food01.jpg',
    title: 'Sirloin Steak ',
    weight: '500g',
    price: 18.5,
    originalPrice: 23.0,
    rating: 4.1,
    ratingCount: 50,
    badges: ['special'],
    isAvailable: true,
    isLowStock: true,
    boughtBefore: true,
    lifeText: 'Life 4 days min',
  },
  {
    imageUrl: '/assets/food03.jpg',
    title: 'Itambe Milk Carton',
    weight: '1ltr',
    price: 11.0,
    originalPrice: 13.6,
    rating: 4.4,
    ratingCount: 23,
    badges: ['onlineOnly', ],
    isAvailable: false,
    isLowStock: false,
    boughtBefore: false,
    lifeText: '',
  },
    {
    imageUrl: '/assets/food02.jpg',
    title:  ' Raw Fish Platter  ',
    weight: '200g',
    price: 5.0,
    originalPrice: 10.0,
    rating: 3.9,
    ratingCount: 176,
    badges: ['special'],
    isAvailable: true,
    isLowStock: false,
    boughtBefore: false,
    lifeText: 'Life 5 days min',
  },
  {
    imageUrl: '/assets/food04.jpg',
    title: 'Mini Fruit bundle',
    weight: '500g',
    price: 18.5,
    originalPrice: 23.0,
    rating: 4.1,
    ratingCount: 50,
    badges: ['special'],
    isAvailable: true,
    isLowStock: true,
    boughtBefore: true,
    lifeText: 'Life 4 days min',
  },
  {
    imageUrl: '/assets/food05.jpg',
    title: 'Veggie Patch board',
    weight: '1ltr',
    price: 11.0,
    originalPrice: 13.6,
    rating: 4.4,
    ratingCount: 23,
    badges: ['onlineOnly', ],
    isAvailable: false,
    isLowStock: false,
    boughtBefore: false,
    lifeText: '',
  },
   {
    imageUrl: '/assets/food06.jpg',
    title: 'Eggs Carton of 6',
    weight: '1ltr',
    price: 11.0,
    originalPrice: 13.6,
    rating: 4.4,
    ratingCount: 23,
    badges: ['onlineOnly', ],
    isAvailable: false,
    isLowStock: false,
    boughtBefore: false,
    lifeText: '',
  },
]

export default function Page() {
  return (
    <main className={styles.gridWrapper}>
      {products.map((product, idx ) => (
        <ProductTile key={idx} {...product}/>
      ))}
    </main>
  )
}
