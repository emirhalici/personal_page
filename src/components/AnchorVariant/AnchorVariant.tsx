import { PropsWithRequiredChildren } from '~/constants/Types';
import './AnchorVariant.css';

type AnchorVariant = {
  href: string;
  openInNewTab?: boolean;
} & PropsWithRequiredChildren;
export default function AnchorVariant(props: AnchorVariant) {
  return (
    <a
      className='link-url-line'
      href={props.href}
      target={props.openInNewTab ? '_blank' : undefined}
      rel={props.openInNewTab ? 'noopener noreferrer' : undefined}
    >
      {props.children}
    </a>
  );
}
