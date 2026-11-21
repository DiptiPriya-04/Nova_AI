import { useState } from 'react'
import { Check } from 'lucide-react'

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  const plans = [
    {
      name: 'Free',
      price: '$0',
      perks: ['10 generations per day', 'AI Writer', 'Community support'],
      highlight: false,
      button: 'Start free',
    },
    {
      name: 'Pro',
      price: yearly ? '$15' : '$19',
      perks: [
        'Unlimited generations',
        'AI Writer, Image Studio and Summarizer',
        'Priority support',
      ],
      highlight: true,
      button: 'Go Pro',
    },
  ]

  const tab = 'px-5 py-2 rounded-full text-sm font-medium transition'
  const active = 'bg-indigo-600 text-white'
  const inactive = 'text-gray-600 hover:text-indigo-600'

  return (
    <section id="pricing" className="bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Simple pricing</h2>

        {/* Monthly / Yearly switch */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex bg-white border border-gray-200 rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`${tab} ${!yearly ? active : inactive}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`${tab} ${yearly ? active : inactive}`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`bg-white rounded-2xl p-8 ${
                p.highlight
                  ? 'border-2 border-indigo-600 shadow-xl'
                  : 'border border-gray-200'
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800">{p.name}</h3>

              <p className="mt-4 text-4xl font-bold text-gray-800">
                {p.price}
                {p.name === 'Pro' && (
                  <span className="text-base font-normal text-gray-500">/mo</span>
                )}
              </p>

              {p.name === 'Pro' && yearly && (
                <p className="mt-1 text-sm text-indigo-600">Billed yearly, $180/year</p>
              )}

              <ul className="mt-6 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-gray-600">
                    <Check className="text-indigo-600 shrink-0" size={18} />
                    {perk}
                  </li>
                ))}
              </ul>

             <a
  href="#contact"
  className={`mt-8 block text-center w-full py-3 rounded-lg ${
    p.highlight
      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
      : 'border border-gray-300 text-gray-800 hover:border-indigo-600'
  }`}
>
  {p.button}
</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}