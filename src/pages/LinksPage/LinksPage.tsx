import './LinksPage.css';
import { LinkSectionPost } from './Components/LinkSection/LinkSection';
import { linksContent } from './LinkTypes';

export default function LinksPage() {
  return (
    <div className='page-fixed-width-root'>
      <p>
        I am curating things I find interesting or find together here. Whether it be about code,
        computer science, music, games or just any random video, here it is...
      </p>
      {linksContent.map((section, index) => (
        <LinkSectionPost key={index} section={section} />
      ))}
    </div>
  );
}
