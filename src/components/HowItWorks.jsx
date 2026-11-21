const steps = [
  { n: 1, title: 'Type a prompt', text: 'Describe what you want in plain words.' },
  { n: 2, title: 'Pick your AI tool', text: 'Choose Writer, Image Studio or Summarizer.' },
  { n: 3, title: 'Export your result', text: 'Copy or download it and use it anywhere.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">How it works</h2>
<p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
  NovaAI is an all-in-one AI studio for writing, images and summaries.
  Just type what you need and get a result in three simple steps.
</p>
      </div>
    </section>
  )
}