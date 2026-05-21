import '@google/model-viewer'
import ReactMarkdown from 'react-markdown'

const rubberDuckMarkdown = `
## Rubber Duck Model

This item includes a real 3D model in addition to markdown content.

Use your mouse or touch to rotate the duck, and it will also slowly spin on its own.
`

function RubberDuckContent() {
  return (
    <>
      <ReactMarkdown>{rubberDuckMarkdown}</ReactMarkdown>
      <model-viewer
        className="portfolio-model-viewer"
        src="/Duck.glb"
        alt="Rubber duck 3D model"
        auto-rotate
        camera-controls
        auto-rotate-delay="0"
        interaction-prompt="auto"
        shadow-intensity="1"
        exposure="1"
      />
    </>
  )
}

const RubberDuckItem = {
  id: 'rubber-duck',
  image: 'https://www.shipducky.com/cdn/shop/products/Instagrampost-1a.jpg?v=1660097941&width=1946',
  projtype: '3D Experience',
  title: 'Rubber Duck',
  subtitle: 'A Google Model Viewer experience with an interactive 3D duck model.',
  modalComponent: RubberDuckContent,
}

export default RubberDuckItem
