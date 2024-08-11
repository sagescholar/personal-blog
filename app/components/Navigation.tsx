import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-gray-800 hover:text-gray-600">Home</Link></li>
          <li><Link href="/about" className="text-gray-800 hover:text-gray-600">About</Link></li>
          <li><Link href="/contact" className="text-gray-800 hover:text-gray-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}