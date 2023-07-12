import { minecraftMusic } from './LinkTypes';
import './LinksPage.css';
import { LinkSectionPost } from './Components/LinkSection/LinkSection';

export default function LinksPage() {
  return (
    <div className='page-fixed-width-root'>
      <p>
        I am curating things I find interesting or find together here. Whether it be about code,
        computer science, music, games or just any random video, here it is...
      </p>
      <LinkSectionPost section={minecraftMusic} />
    </div>
  );
}
