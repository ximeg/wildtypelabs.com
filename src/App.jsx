import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PortfolioItem from './components/PortfolioItem.jsx'

function App() {
  const [count, setCount] = useState(0)

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

        <div className="portfolio-grid">
          <PortfolioItem
            image="public/prtfol/saberclip.png"
            projtype="Rapid Prototyping"
            title="Saber Clip"
            subtitle="If you already have an avalanche probe, you
              can put this 3D printed attachment on top of it to
              create a long and lightweight stick clip that can be
              deployed in seconds."
            modalContent={
              <>
                <p>
                  I designed the Saber Clip to be a simple, lightweight, and easily printable.
                  It's made of Tough 1500 V2 resin, which is strong and durable enough to
                  withstand the forces of being heavily used.
                </p>
                <img src="https://lh3.googleusercontent.com/pw/AP1GczNSZERzUcj0nDi9hLnpFAXHczfwqds_FYxvbWeLz4MPix7-2epauCvyVSAK-Ip-38GFBip92tUmSmxu1M1fnXjpBc69l0mzpcRJwXd4gQvF3Val6v4kP4VUs9JiN719M66w7-tw1tNPxN6MwARD1pBG3Q=w1286-h1707-s-no-gm?authuser=0" alt="Saber Clip 3D printing" />
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/nwSeCh8Pl2Y?si=w0jldP8jLa1JpcaZ"
                    title="Demo video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </>
            }
          />

          <PortfolioItem
            image="https://picsum.photos/500"
            projtype="Rapid Prototyping"
            title="Saber Clip"
            subtitle="If you already have an avalanche probe, you
              can put this 3D printed attachment on top of it to
              create a long and lightweight stick clip that can be
              deployed in seconds."
            modalContent={
              <>
                <p>
                  I designed the Saber Clip to be a simple, lightweight, and easily printable.
                  It's made of Tough 1500 V2 resin, which is strong and durable enough to
                  withstand the forces of being heavily used.
                </p>
                <img src="https://lh3.googleusercontent.com/pw/AP1GczNSZERzUcj0nDi9hLnpFAXHczfwqds_FYxvbWeLz4MPix7-2epauCvyVSAK-Ip-38GFBip92tUmSmxu1M1fnXjpBc69l0mzpcRJwXd4gQvF3Val6v4kP4VUs9JiN719M66w7-tw1tNPxN6MwARD1pBG3Q=w1286-h1707-s-no-gm?authuser=0" alt="Saber Clip 3D printing" />
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/nwSeCh8Pl2Y?si=w0jldP8jLa1JpcaZ"
                    title="Demo video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </>
            }
          />

          <PortfolioItem
            image="https://picsum.photos/400"
            projtype="Rapid Prototyping"
            title="Saber Clip"
            subtitle="If you already have an avalanche probe, you
              can put this 3D printed attachment on top of it to
              create a long and lightweight stick clip that can be
              deployed in seconds."
            modalContent={
              <>
                <p>
                  I designed the Saber Clip to be a simple, lightweight, and easily printable.
                  It's made of Tough 1500 V2 resin, which is strong and durable enough to
                  withstand the forces of being heavily used.
                </p>
                <img src="https://lh3.googleusercontent.com/pw/AP1GczNSZERzUcj0nDi9hLnpFAXHczfwqds_FYxvbWeLz4MPix7-2epauCvyVSAK-Ip-38GFBip92tUmSmxu1M1fnXjpBc69l0mzpcRJwXd4gQvF3Val6v4kP4VUs9JiN719M66w7-tw1tNPxN6MwARD1pBG3Q=w1286-h1707-s-no-gm?authuser=0" alt="Saber Clip 3D printing" />
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/nwSeCh8Pl2Y?si=w0jldP8jLa1JpcaZ"
                    title="Demo video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </>
            }
          />


          <PortfolioItem
            image="https://picsum.photos/450"
            projtype="Rapid Prototyping"
            title="Saber Clip"
            subtitle="If you already have an avalanche probe, you
              can put this 3D printed attachment on top of it to
              create a long and lightweight stick clip that can be
              deployed in seconds."
            modalContent={
              <>
                <p>
                  I designed the Saber Clip to be a simple, lightweight, and easily printable.
                  It's made of Tough 1500 V2 resin, which is strong and durable enough to
                  withstand the forces of being heavily used.
                </p>
                <img src="https://lh3.googleusercontent.com/pw/AP1GczNSZERzUcj0nDi9hLnpFAXHczfwqds_FYxvbWeLz4MPix7-2epauCvyVSAK-Ip-38GFBip92tUmSmxu1M1fnXjpBc69l0mzpcRJwXd4gQvF3Val6v4kP4VUs9JiN719M66w7-tw1tNPxN6MwARD1pBG3Q=w1286-h1707-s-no-gm?authuser=0" alt="Saber Clip 3D printing" />
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/nwSeCh8Pl2Y?si=w0jldP8jLa1JpcaZ"
                    title="Demo video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </>
            }
          />
        </div>
      </section>

      <div className="ticks"></div>


      <div className="ticks"></div>
      <section className="center"></section>
    </>
  )
}

export default App
