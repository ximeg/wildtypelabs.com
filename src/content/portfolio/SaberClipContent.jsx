function SaberClipContent() {
  return (
    <>
      <p>
        I designed the Saber Clip to be simple, lightweight, and easily printable.
        It is optimized for Tough 1500 V2 resin and built to clip quickly onto an
        existing avalanche probe.
      </p>
      <img
        src="https://lh3.googleusercontent.com/pw/AP1GczNSZERzUcj0nDi9hLnpFAXHczfwqds_FYxvbWeLz4MPix7-2epauCvyVSAK-Ip-38GFBip92tUmSmxu1M1fnXjpBc69l0mzpcRJwXd4gQvF3Val6v4kP4VUs9JiN719M66w7-tw1tNPxN6MwARD1pBG3Q=w1286-h1707-s-no-gm?authuser=0"
        alt="Saber Clip 3D printing"
      />
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/nwSeCh8Pl2Y?si=w0jldP8jLa1JpcaZ"
          title="Demo video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  )
}

const SaberClipItem = {
  id: 'saber-clip',
  image: '/prtfol/saberclip.png',
  projtype: 'Rapid Prototyping',
  title: 'Saber Clip',
  subtitle: 'A quick 3D printed attachment that turns an avalanche probe into a lightweight stick clip.',
  modalComponent: SaberClipContent,
}

export default SaberClipItem
