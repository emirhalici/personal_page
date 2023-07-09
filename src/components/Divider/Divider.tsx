export default function Divider() {
  const height = 4;
  const color = 'rgba(255, 255, 255, 0.1)';

  const circle = {
    width: height,
    height: height,
    backgroundColor: color,
    margin: '0px 16px',
    borderRadius: height,
  };
  const rectangle = {
    width: '20%',
    height: height,
    backgroundColor: color,
    borderRadius: '16px',
  };

  return (
    <div className='row-flex margin-vertical-medium'>
      <div style={rectangle}></div>
      <div style={circle}></div>
      <div style={rectangle}></div>
    </div>
  );
}
