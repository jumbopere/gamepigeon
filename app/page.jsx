"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Home() {



  
  return (
    <div className=" container mx-auto  flex-grow bg-gray-200 flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Welcome to My PJ GamePigeon Word Game Solver</h1>
        <div className="space-x-4">
          <Link
            href="/anagrams"
            className="inline-block italic bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Anagrams
          </Link>
          <Link
            href="/word-hunt"
            className="inline-block italic bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
          Word Hunt
          </Link>
        </div>
      </div>
    </div>
    

  );
}
