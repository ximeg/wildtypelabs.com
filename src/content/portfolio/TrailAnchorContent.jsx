import ReactMarkdown from 'react-markdown'

const trailAnchorMarkdown1 = `
## Trail Anchor

Trail Anchor is an adjustable anchor concept that balances strength and portability. The design is meant to work across different surfaces while staying compact.

![Trail Anchor prototype](https://picsum.photos/seed/trailanchor/900/500)

It includes a **simple** locking mechanism so users can set the anchor once and trust it through repeated use.
`

const trailAnchorMarkdown2 = `
## Second header
More content
`

function TrailAnchorContent() {
  return (
    <>
      <ReactMarkdown>{trailAnchorMarkdown1}</ReactMarkdown>
      <span style={{backgroundColor: '#ffff0010'}}><em>This is HTML</em></span>
      <ReactMarkdown>{trailAnchorMarkdown2}</ReactMarkdown>
    </>
  )
}

const TrailAnchorItem = {
  id: 'trail-anchor',
  image: 'https://picsum.photos/seed/anchor/600/400',
  projtype: 'Hardware Concept',
  title: 'Trail Anchor',
  subtitle: 'A modular anchor system for quick setup and reliable performance on uneven terrain.',
  modalComponent: TrailAnchorContent,
}

export default TrailAnchorItem
