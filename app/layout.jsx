import Link from "next/link";
import "./globals.css";
import { Navbar, Footer } from "./components";

export const metadata = {
  title: "PJ Gamepigeon  Solver",
  description: "Simple Gamepigeon Word Games Solver",
};

export default function RootLayout( {children}) {

  return (

    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-200" >
   <Navbar/>
        {children}
   <Footer/>
        </body>
    </html>

  );
}
