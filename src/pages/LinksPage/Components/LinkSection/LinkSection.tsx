import { TextSubtitle } from '~/components/Texts/Texts';
import { LinkSection } from '../../LinkTypes';
import LinkPost from '../LinkPost/LinkPost';

export function LinkSectionPost(props: { section: LinkSection }) {
  const links = props.section.links;
  const lastIndex = links.length - 1;
  const image = props.section.image;

  return (
    <div>
      <TextSubtitle>{props.section.title}</TextSubtitle>
      {image && (
        <img
          alt={image?.alternateText ?? ''}
          src={image?.url}
          width='100%'
          style={{ marginBottom: '16px' }}
        />
      )}
      {links.map((link, index) => (
        <LinkPost key={link.url} model={link} addDivider={index != lastIndex} />
      ))}
      {<div className='circle-divider'></div>}
    </div>
  );
}
