import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = formRef.current
    const formData = new FormData(form)
    // simple honeypot
    if (formData.get('hp')) {
      setStatus('spam')
      return
    }

    setStatus('sending')
    const user = import.meta.env.VITE_EMAILJS_USER_ID || '3EUu469kr7dSjyBSp'
    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_npkgpeo'
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_a7kr3co'

    // set time field
    form.querySelector('[name="time"]').value = new Date().toLocaleString()

    emailjs.sendForm(service, template, form, user)
      .then(() => setStatus('sent'))
      .catch((err) => {
        console.error('EmailJS error', err)
        setStatus('error')
      })
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
      <input type="text" name="hp" className="contact-form__honeypot" tabIndex="-1" autoComplete="off" />

      <label className="contact-form__field">
        <span>Your Name</span>
        <input className="contact-form__input" name="name" type="text" required />
      </label>

      <label className="contact-form__field">
        <span>Your Email</span>
        <input className="contact-form__input" name="email" type="email" required />
      </label>

      <label className="contact-form__field">
        <span>Message Subject</span>
        <input className="contact-form__input" name="title" type="text" />
      </label>

      <label className="contact-form__field">
        <span>Your Message</span>
        <textarea className="contact-form__input contact-form__textarea" name="message" rows={6} required />
      </label>

      {/* hidden time field populated before send */}
      <input name="time" type="hidden" />

      <div className="contact-form__actions">
        <button className="contact-form__submit" type="submit">Send</button>
        {status === 'sending' && <span className="contact-form__status">Sending…</span>}
        {status === 'sent' && <span className="contact-form__status contact-form__status--success">Thanks — message sent.</span>}
        {status === 'error' && <span className="contact-form__status contact-form__status--error">Sorry — try again later.</span>}
        {status === 'spam' && <span className="contact-form__status contact-form__status--error">Spam detected.</span>}
      </div>
      <p style={{fontSize: 'x-small'}}>We will get back to you soon. This form sends us an email without having to expose our email address to the internet bots. We respect your privacy and don't share your information with anyone.</p>
    </form>
  )
}
