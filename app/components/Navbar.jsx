"use client"
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="bg-gray-200 ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-2xl"
              onClick={closeMenu}
            >
              PJ Solvers
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                href="/anagrams"
                className=" hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                onClick={closeMenu}
              >
                Anagrams
              </Link>
              <Link
                href="/word-hunt"
                className=" hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                onClick={closeMenu}
              >
                Word Hunt
              </Link>
            
            </div>
          </div>
          <div className="-mr-2 flex md:hidden ">
            <button
              type="button"
              className="inline-flex items-center font-bold text-2xl justify-center p-2 rounded-md  hover:text-black-100 hover:bg-black-100 focus:outline-none focus:bg-black-100 focus:text-black transition duration-150 ease-in-out"
              aria-label="Main menu"
             aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >{
              isMenuOpen ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            ): (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
            )
            }
       

            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link
            href="/anagrams"
            className="block  hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            Anagrams
          </Link>
          <Link
            href="/word-hunt"
            className="mt-1 block hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            Word Hunt
          </Link>
       
        </div>
      </div>
    </nav>

    //   <nav className="bg-gray-800 shadow-lg">
    //   <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       <div className="flex-shrink-0">
    //         <Link href="/" className="text-white font-bold text-xl">
    //           My Website
    //         </Link>
    //       </div>
    //       <div className="flex">
    //         <div className="hidden md:block">
    //           <Link
    //             href="/"
    //             className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
    //           >
    //             Home
    //           </Link>
    //           <Link
    //             href="/about"
    //             className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
    //           >
    //             About
    //           </Link>
    //           <Link
    //             href="/contact"
    //             className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
    //           >
    //             Contact
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <header className="py-6 bg-gray-100">
    //     <div className="container mx-auto text-center">
    //       <Link href='/' className="text-3xl font-semibold">PJ Gamepigeon Word Games Solver</Link>
    //       <p className="text-lg mt-2">Simple Anagrams Solver</p>
    //     </div>
    //   </header> */}
    // </nav>
    
  )
}

export default Navbar