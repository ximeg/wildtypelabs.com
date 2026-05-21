function FieldBeaconContent() {
  return (
    <>
      <p>
        The Field Beacon is built for rugged field use, with an emphasis on durable
        materials and intuitive visibility. It is designed to mount quickly and stay
        readable in low light.
      </p>
      <img
        src="https://picsum.photos/seed/beacon-detail/900/500"
        alt="Field Beacon prototype"
      />
      <p>
        This prototype pairs a high-contrast diffuser with a compact battery pack,
        making it easy to transport and deploy from a backpack.
      </p>
    </>
  )
}

const FieldBeaconItem = {
  id: 'field-beacon',
  image: 'https://picsum.photos/seed/beacon/600/400',
  projtype: 'Product Design',
  title: 'Field Beacon',
  subtitle: 'A compact indicator designed for fast deployment in harsh outdoor conditions.',
  modalComponent: FieldBeaconContent,
}

export default FieldBeaconItem
