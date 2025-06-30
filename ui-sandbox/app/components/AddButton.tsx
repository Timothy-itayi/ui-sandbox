export default function AddButton({ isAvailable }: { isAvailable: boolean }) {
  return (
    <button
      className={`flex items-center justify-center w-full mt-2 rounded-full px-3 py-2 text-white font-semibold ${
        isAvailable ? 'bg-purple-600 hover:bg-red-700' : 'bg-gray-400 cursor-not-allowed'
      }`}
      disabled={!isAvailable}
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3h12.2M7 13l1.5-3h9" />
      </svg>
      {isAvailable ? 'Add' : 'Shop similar'}
    </button>
  )
}
