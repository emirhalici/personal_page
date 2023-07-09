import { PropsWithRequiredChildren } from '../../constants/Types';
import { TextTitle, TextSubtitle, TextDetail } from '../Texts/Texts';
import './Post.css';

type PostProps = {
  title: string;
  subtitle: string | undefined;
  detail: { date: string; message: string } | undefined;
} & PropsWithRequiredChildren;

export default function Post(props: PostProps) {
  return (
    <section className='post'>
      <TextTitle>{props.title}</TextTitle>
      {props.subtitle ? <TextSubtitle>{props.subtitle}</TextSubtitle> : <div></div>}
      {props.detail ? (
        <TextDetail>
          {props.detail.date} · {props.detail.message}
        </TextDetail>
      ) : (
        <div></div>
      )}
      {props.children}
    </section>
  );
}
