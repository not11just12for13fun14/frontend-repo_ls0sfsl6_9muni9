import { useState } from 'react';
import { Menu, X, PlayCircle } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
            <span className="font-semibold text-gray-900">MuseLearn</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#courses" className="text-gray-600 hover:text-gray-900 transition">Courses</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
            <a href="#" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              <PlayCircle className="h-4 w-4" />
              Try a Lesson
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              <a href="#features" className="px-3 py-2 rounded-md hover:bg-gray-100">Features</a>
              <a href="#courses" className="px-3 py-2 rounded-md hover:bg-gray-100">Courses</a>
              <a href="#pricing" className="px-3 py-2 rounded-md hover:bg-gray-100">Pricing</a>
              <a href="#" className="px-3 py-2 rounded-md bg-gray-900 text-white text-center">Try a Lesson</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
