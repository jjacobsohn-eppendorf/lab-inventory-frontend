import { Device } from '../components/devices/Device';
import DeviceItem from '../components/devices/DeviceItem';
import List from '../components/List';

export default function DeviceList() {
  return (
    <List
      title="Devices"
      apiUrl='/api/devices/'
      Item={Device}
      ItemComponent={({ data }) => <DeviceItem data={data as Device} />} // Ensure correct type casting
      linkItem={(device) => `/devices/${device.id}`}
    />
  )
}