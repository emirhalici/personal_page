import { TextSubtitle, TextTitle } from '~/components/Texts/Texts';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className='page-fixed-width-root'>
      <TextTitle>Hello, I&apos;m Emir 👋</TextTitle>
      <TextSubtitle>
        I am a software developer based in <b>Türkiye</b>.
      </TextSubtitle>
      <p>
        I am currently remotely freelancing and working on receiving my bachelor&apos;s (3/4) in{' '}
        <b>Ankara</b>. Check out my work and socials down below!
      </p>
    </div>
  );
}
