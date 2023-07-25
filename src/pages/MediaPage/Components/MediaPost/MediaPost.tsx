import LinkDivider from '~/pages/LinksPage/Components/LinkDivider/LinkDivider';
import AnchorVariant from '~/components/AnchorVariant/AnchorVariant';

type MediaPostData = {
  readonly title: string;
  readonly content: string;
  readonly releaseYear: number;
  readonly url: string;
  // TODO: Implement rating functionality on [feature/media-page]
  readonly ratingOutOfFive: number | undefined;
};

type MediaPostProps = {
  readonly data: MediaPostData;
  readonly addDivider: boolean;
};
export default function MediaPost(props: MediaPostProps) {
  const data = props.data;

  return (
    <div>
      <AnchorVariant href={data.url} openInNewTab={true}>
        {data.title} ({data.releaseYear})
      </AnchorVariant>
      <p>{data.content}</p>
      {props.addDivider && <LinkDivider />}
    </div>
  );
}

export type { MediaPostData };
