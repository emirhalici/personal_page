import { TextSubtitle, TextTitle } from '~/components/Texts/Texts';
import { Link } from 'react-router-dom';
import { routeNames } from '~/constants/RouteNames';
import SocialLinks from '~/components/SocialLinks/SocialLinks';

export default function HomePage() {
  return (
    <div className='page-fixed-width-root'>
      <TextTitle>Hello, I&apos;m Emir 👋</TextTitle>
      <TextSubtitle>
        I am a software developer based in <b>Türkiye</b>.
      </TextSubtitle>
      <p>
        Check out my socials down below or more learn more about me{' '}
        <Link to={routeNames.about.path}> here</Link>!
      </p>
      <SocialLinks />
    </div>
  );
}
