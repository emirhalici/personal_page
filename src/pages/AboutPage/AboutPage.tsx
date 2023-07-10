import { TextSubtitle, TextTitle } from '~/components/Texts/Texts';
import './AboutPage.css';
import SocialLinks from '~/components/SocialLinks/SocialLinks';

export default function AboutPage() {
  const emailLink = 'mailto:emir.halici1@gmail.com';

  return (
    <div className='page-fixed-width-root'>
      <TextTitle>About me</TextTitle>
      <p>
        I&apos;m Emir, a software developer based in Türkiye. I have a passion for software
        development, with a primary focus on mobile applications and creating exceptional mobile
        experiences.
      </p>
      <TextSubtitle>Work Experience</TextSubtitle>
      <p>
        After a short internship, I transitioned into freelancing last year. I have been working
        remotely with international companies abroad, helping them build their mobile applications.
        While I am still a student, I&apos;ve been gaining valuable experience through these
        contracts.
      </p>
      <p>
        Currently, I&apos;m working for an outer architectural smart lighting company. We are
        building the next generation of customer app and systems to support the lighting
        infrastructure. Primary technologies and tools we have been using are:{' '}
        <code>
          Flutter, AWS Amplify, AWS CDK, Firebase, MicroPython, MicroPython Viper, Python...
        </code>
      </p>
      <TextSubtitle>Education</TextSubtitle>
      <p>
        I am pursuing my degree in <b>Computer Engineering</b> in my forth and last year at Ankara
        University. Current GPA is <code>3.56</code> and I am set to graduate in 2024/2025
        (expected).
      </p>
      <TextSubtitle>Contact</TextSubtitle>
      <p>
        Feel free to contact me via my primary <a href={emailLink}>email account</a> for work
        related topics or just to have a chat.
      </p>
      <SocialLinks />
      <EmptySpace height={60} />
    </div>
  );
}

function EmptySpace(props: { height?: number; width?: number }) {
  return <div style={props}></div>;
}
