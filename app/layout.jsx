import Link from "next/link";
import "./globals.css";
import { Navbar, Footer } from "./components";

export const metadata = {
  title: "PJ Anagrams Solver",
  description: "Simple Anagrams Solver",
};

export default function RootLayout( {children}) {

  return (

    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100" >
   <Navbar/>
        {children}
   <Footer/>
        </body>
    </html>

  );
}
