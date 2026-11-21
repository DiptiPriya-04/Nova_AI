import { useState } from 'react'

const emptyForm = { name: '', email: '', message: '' }

export default function ContactFooter() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    setErrors({ ...errors, [name]: '' })
    setSuccess(false)
  }

  function validate() {
    const newErrors = {}
    if (!form.name.trim()) {
      newErrors.name = 'Please enter your name.'
    }
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email.'
    } else if (!form.email.includes('@')) {
      newErrors.email = 'Email must contain @.'
    }
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setForm(emptyForm)
      setSuccess(true)
    } else {
      setSuccess(false)
    }
  }

  const inputBase =
    'w-full border rounded-lg px-4 py-3 text-gray-800 focus:outline-none'
  const ok = 'border-gray-300 focus:border-indigo-600'
  const bad = 'border-red-500 focus:border-red-500'

  return (
    <>
      <section id="contact" className="py-24">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Request a Demo</h2>
          <p className="mt-3 text-gray-600 text-center">
            Tell us a bit about you and we will get in touch.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`${inputBase} ${errors.name ? bad : ok}`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                className={`${inputBase} ${errors.email ? bad : ok}`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to see?"
              className={`${inputBase} ${ok}`}
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
            >
              Request a Demo
            </button>

            {success && (
              <p className="text-center text-green-600 font-medium">
                Thanks! Your demo request has been sent.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NavaAI. All rights reserved.
      </footer>
    </>
  )
}