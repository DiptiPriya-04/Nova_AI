import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
      <span className="inline-block bg-indigo-50 text-indigo-600 text-sm font-medium px-3 py-1 rounded-full">
        AI-powered creation suite
      </span>

      <h1 className="mt-6 text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
  Create, Edit, and Automate
  <span className="text-indigo-600"> All in One AI Studio</span>
</h1>

<p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
  NovaAI brings writing, images and summaries into one simple workspace.
  Spend less time on busywork and more time on ideas.
</p>

      <div className="mt-8 flex justify-center gap-4">
        <a href="#pricing" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
          Get Started
        </a>
        <a href="#how-it-works" className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:border-indigo-600">
          See how it works
        </a>
      </div>

      {/* Fake AI prompt bar (sirf design, asli AI nahi) */}
      <div className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 text-left">
        <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3">
          <Sparkles className="text-indigo-600 shrink-0" size={20} />
          <p className="text-gray-500 flex-1">Write a short intro about remote work...</p>
          <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-sm">
            Generate
          </button>
        </div>

        <div className="mt-4 bg-gray-50 rounded-xl p-5">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
            Generated output
          </p>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Remote work has changed how teams collaborate. With the right
            tools, people can do focused work from anywhere while staying
            connected to the people who matter.
          </p>
        </div>
      </div>
    </section>
  )
}