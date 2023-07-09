import { PropsWithRequiredChildren } from '../../constants/Types';
import './Card.css';

export default function Card(props: PropsWithRequiredChildren) {
  return <div className='card'>{props.children}</div>;
}
