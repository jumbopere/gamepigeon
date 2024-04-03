import Link from "next/link"

const Navbar = () => {
  return (
<header className="py-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <Link href='/' className="text-3xl font-semibold">PJ Anagrams Solver</Link>
          <p className="text-lg mt-2">Simple Anagrams Solver</p>
        </div>
      </header>
  )
}

export default Navbar