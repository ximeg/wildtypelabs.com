import './App.css'
import PortfolioGrid from './components/PortfolioGrid.jsx'

function App() {

  return (
    <>
      <section className="center">
        <div>
          <h1>Wildtype Labs</h1>
          <h2>About Us</h2>
          <p>
            We don't know who we are yet, but we're excited to build amazing things together!
          </p>
        </div>
      </section>
      <section className="center">
        <h2>Portfolio</h2>

        <PortfolioGrid />
      </section>


      <section className="center">

        <h2>Contact Us</h2>
        <p>Email me</p>

      </section>
    </>
  )
}

export default App
