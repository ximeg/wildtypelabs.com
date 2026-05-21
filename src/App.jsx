import './App.css'
import PortfolioGrid from './components/PortfolioGrid.jsx'
import ContactForm from './components/ContactForm.jsx'
import ReactMarkdown from 'react-markdown'

const introText =
`👋 Hi, I'm Roman.

I'm a freelance **scientific instrumentation engineer** specializing in _biophotonics, rapid prototyping, precision device control, and automation_ for high-throughput collection, analysis, and visualization of data.

I've worked with prestigious research insitutions and top-tier companies. I'm also big _outdoors enthusiast_ and _avid rock climber_.

I'm based in **San Francisco, California**.`

const contactText =
`
If you’re working on a technically ambitious project and need help connecting hardware, software, automation, and data into a reliable system, I’d love to hear about it. I’m available for consulting, fractional engineering support, prototyping, and interdisciplinary R&D collaborations.

Feel free to reach out even if your problem is unusual or difficult to define.

I’m based in the San Francisco Bay Area and speak English, Russian, and German.
`

function md2html(markdown) {
  return (
    <>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  )
}


function App() {

  return (
    <>
      <section className="center">
        <div>
          <h1>Roman Kiselev</h1>
          <h2>Wildtype Labs</h2>
            {md2html(introText)}
        </div>
      </section>


      <section className="center">
        <h2>Portfolio</h2>

        <PortfolioGrid />
      </section>


      <section className="center">

        <h2>Contact Us</h2>
        {md2html(contactText)}
        <ContactForm />

      </section>
    </>
  )
}

export default App
