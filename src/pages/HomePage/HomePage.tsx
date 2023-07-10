import { TextSubtitle, TextTitle } from '~/components/Texts/Texts';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { routeNames } from '~/constants/RouteNames';

export default function HomePage() {
  return (
    <div className='page-fixed-width-root'>
      <TextTitle>Hello, I&apos;m Emir 👋</TextTitle>
      <TextSubtitle>
        I am a software developer based in <b>Türkiye</b>.
      </TextSubtitle>
      <p>
        I am currently remotely freelancing and working on receiving my bachelor&apos;s (3/4) in{' '}
        <b>Ankara</b>. Check out more socials down below or more learn more about me{' '}
        <Link to={routeNames.about.path}> here</Link>!
      </p>
    </div>
  );
}
