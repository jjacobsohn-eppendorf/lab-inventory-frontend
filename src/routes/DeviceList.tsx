import CollectionView from '../components/CollectionView';

export default function DeviceList() {
  return (
    <CollectionView
      title="Devices"
      apiUrl='/api/devices/'
      linkItem={(device) => `/devices/${device.id}`}
    />
  )
}