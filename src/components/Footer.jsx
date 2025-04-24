import React from 'react'

const Footer = () => {
  return (
    <footer className="rounded-lg shadow-sm m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between text-center sm:text-left">
            <a href="#" className="flex justify-center sm:justify-start items-center mb-4 sm:mb-0 space-x-3">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rate My Flat</span>
            </a>
            <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Licensing</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700" />
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2025 <a href="#" className="hover:underline">Rate My Flat™</a>. All Rights Reserved.
          </span>
        </div>
      </footer>
  )
}

export default Footer