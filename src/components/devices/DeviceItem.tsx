import { Device } from './Device';

interface DeviceCardProps {
  data: Device;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ data: device }) => {
  return (<>
    <div className="d-flex w-100 align-items-center justify-content-between">
      <strong className="mb-1">{device.id}</strong>
      <small>{device.location}</small>
    </div>
    <dl className="col-10 mb-1 small">
      <dt>Type</dt>
      <dd>{device.type}</dd>
      <dt>Device Health</dt>
      <dd>{device.device_health}</dd>
      <dt>Last Used</dt>
      <dd>{device.last_used}</dd>
      <dt>Price</dt>
      <dd>{device.price}</dd>
      <dt>Color</dt>
      <dd>{device.color}</dd>
    </dl>
  </>
  );
};

export default DeviceCard;