function TrailAnchorContent() {
  return (
    <>
      <p>
        Trail Anchor is an adjustable anchor concept that balances strength and portability.
        The design is meant to work across different surfaces while staying compact.
      </p>
      <img
        src="https://picsum.photos/seed/trailanchor/900/500"
        alt="Trail Anchor prototype"
      />
      <p>
        It includes a simple locking mechanism so users can set the anchor once and trust
        it through repeated use.
      </p>
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
