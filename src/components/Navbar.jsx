// import { Sparkles } from 'lucide-react'

// export default function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
//         <a href="#" className="flex items-center gap-2 text-xl font-bold text-gray-800">
//           <Sparkles className="text-indigo-600" size={24} />
//           NovaAI
//         </a>

//         <div className="hidden md:flex items-center gap-8 text-gray-600">
//           <a href="#features" className="hover:text-indigo-600">Features</a>
//           <a href="#how-it-works" className="hover:text-indigo-600">How it works</a>
//           <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
//         </div>

//         <a
//           href="#contact"
//           className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
//         >
//           Request a Demo
//         </a>
//       </div>
//     </nav>
//   )
// }

import { useState } from 'react'
import { Sparkles, Menu, X } from 'lucide-react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-gray-800">
          <Sparkles className="text-indigo-600" size={24} />
          NovaAI
        </a>

        {/* Desktop links (phone pe hidden) */}
        <div className="hidden md:flex items-center gap-8 text-gray-600">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-indigo-600">
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop demo button (phone pe hidden) */}
        <a
          href="#contact"
          className="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Request a Demo
        </a>

        {/* Hamburger button (sirf phone pe dikhega) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown (sirf jab open true ho) */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-gray-600 hover:text-indigo-600"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Request a Demo
          </a>
        </div>
      )}
    </nav>
  )
}