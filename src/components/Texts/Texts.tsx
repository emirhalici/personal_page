import { PropsWithRequiredChildren } from '../../constants/Types';
import './Texts.css';

function TextTitle(props: PropsWithRequiredChildren) {
  return <p className='text-title'>{props.children}</p>;
}

function TextSubtitle(props: PropsWithRequiredChildren) {
  return <p className='text-subtitle'>{props.children}</p>;
}

function TextDetail(props: PropsWithRequiredChildren) {
  return <p className='text-detail'>{props.children}</p>;
}

export { TextTitle, TextSubtitle, TextDetail };
