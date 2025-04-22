'use client'

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  // Ubah dari nama menjadi rute langsung
  const navItems = [
    { label: 'About Us', path: '/#about' },
    { label: 'Services', path: '/#services' },
    { label: 'Teams', path: '/teams' },
  ];

  return (
    <div>
      <nav className="bg-blue-500 shadow-md fixed top-0 w-full z-50 rounded-bl-4xl rounded-br-4xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-bold text-blue-100">
              {/* <Link href="/">Company Logo</Link> */}

                <Link href={"/"} className="flex items-center gap-2">
                    <Image
                        alt="logo-blog"
                        src={"/logo.png"}
                        width={200}
                        height={100}
                        className="h-10 w-10"
                        priority
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        Digisync Labs
                    </span>
                </Link>

            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-white hover:text-yellow-300 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-lg">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="block text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-20">{children}</main>
    </div>
  );
}
