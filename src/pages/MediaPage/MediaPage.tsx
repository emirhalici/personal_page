import { TextSubtitle, TextTitle } from '~/components/Texts/Texts';
import MediaPost, { MediaPostData } from './Components/MediaPost/MediaPost';

export default function MediaPage() {
  return (
    <div className='page-fixed-width-root'>
      <p>Curation of media content I am planning to consume / have consumed.</p>
      <TextTitle>2023</TextTitle>
      <TextSubtitle>Movies</TextSubtitle>
      <MediaPost data={oppenheimer} addDivider={true} />
      <MediaPost data={barbie} addDivider={true} />
      <TextSubtitle>TV Shows</TextSubtitle>
      <MediaPost data={invincibleS2} addDivider={true} />
      <MediaPost data={witcherS3} addDivider={true} />
      <MediaPost data={blackMirrorS6} addDivider={true} />
      <MediaPost data={theBearS2} addDivider={false} />
    </div>
  );
}

const oppenheimer: MediaPostData = {
  title: 'Oppenheimer',
  releaseYear: 2023,
  url: 'https://www.imdb.com/title/tt15398776/',
  ratingOutOfFive: undefined,
  content: `Haven't seen it yet.`,
};

const barbie: MediaPostData = {
  title: 'Barbie',
  releaseYear: 2023,
  url: 'https://www.imdb.com/title/tt1517268/',
  ratingOutOfFive: undefined,
  content: `Haven't seen it yet.`,
};

const invincibleS2: MediaPostData = {
  title: 'Invincible S2',
  releaseYear: 2023,
  url: 'https://www.imdb.com/title/tt6741278/',
  ratingOutOfFive: undefined,
  content:
    'Season 2 of Invincible will come out on November 3 this year. As always, Invincible too has realistic/dystopian views at superpowers and superheroes.',
};

const witcherS3: MediaPostData = {
  title: 'The Witcher S3',
  releaseYear: 2023,
  url: 'https://www.imdb.com/title/tt5180504/',
  ratingOutOfFive: undefined,
  content: `This is the last season Henry Cavill will be on it. Should still be entertaining enough to watch it until he is taken out from casting list. I've liked the series' interpretation of a Witcher world so far whether it was loyal to the books/games or not. I care about entertainment, not originality.`,
};

const blackMirrorS6: MediaPostData = {
  title: 'Black Mirror S6',
  releaseYear: 2023,
  url: 'https://www.imdb.com/title/tt2085059/',
  ratingOutOfFive: undefined,
  content: `It started really well in the first episode. I feel like Black Mirror has preserved their quality in acting, plot and dystopian vibes. I'll update once I get to see remaining of the season.`,
};

const theBearS2: MediaPostData = {
  title: 'The Bear S2',
  releaseYear: 2023,
  content:
    'An amazing show that even attracted people like me who have nothing to do with cooking or being a chef. Looking very forward to watching it when it comes out.',
  ratingOutOfFive: undefined,
  url: 'https://www.imdb.com/title/tt14452776/',
};
