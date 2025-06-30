export default function Badge() {
  return (
    <div className="absolute top-2 left-2 w-16 h-16">
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="#ffffff"
          stroke="#b91c1c"  
          strokeWidth="2"
        />
        <text
          x="50%"
          y="46%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="10"         
          fontWeight="700"      
          fill="#b91c1c"        
          fontFamily="'Playfair Display', serif"
        >
          Available
        </text>
        <text
          x="50%"
          y="62%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="8"        
          fontWeight="700"
          fill="#b91c1c"
          fontFamily="'Playfair Display', serif"
        >
          Online
        </text>
      </svg>
    </div>
  )
}
