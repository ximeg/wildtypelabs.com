function AnchorGripContent() {
  return (
    <>
      <p>
        Anchor Grip is a compact handle that improves ergonomics for lifting and
        carrying gear. It was designed with soft contours and a secure hold in mind.
      </p>
      <img
        src="https://picsum.photos/seed/anchorgrip/900/500"
        alt="Anchor Grip detail"
      />
      <p>
        The shape is optimized to reduce pinch points and make the product easier to
        carry over longer distances.
      </p>
    </>
  )
}

const AnchorGripItem = {
  id: 'anchor-grip',
  image: 'https://picsum.photos/seed/grip/600/400',
  projtype: 'Rapid Prototyping',
  title: 'Anchor Grip',
  subtitle: 'A lightweight handle solution that improves grip and control under load.',
  modalComponent: AnchorGripContent,
}

export default AnchorGripItem
