import { PenLine, Image, FileText } from 'lucide-react'

const features = [
  {
    icon: PenLine,
    title: 'AI Writer',
    text: 'Draft articles, emails and captions from a single prompt.',
  },
  {
    icon: Image,
    title: 'Image Studio',
    text: 'Turn a short description into a ready-to-use visual.',
  },
  {
    icon: FileText,
    title: 'Smart Summarizer',
    text: 'Paste long text and get the key points in seconds.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Everything you need</h2>
        <p className="mt-3 text-gray-600 text-center">Three tools, one simple workspace.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50">
                <f.icon className="text-indigo-600" size={24} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-800">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}