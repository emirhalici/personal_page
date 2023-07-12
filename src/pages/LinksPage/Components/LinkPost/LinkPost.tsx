import { LinkModel } from '../../LinkTypes';
import LinkDivider from '../LinkDivider/LinkDivider';
import './LinkPost.css';

export default function LinkPost({ model, addDivider }: { model: LinkModel; addDivider: boolean }) {
  return (
    <div>
      <a className='link-url-line' href={model.url}>
        {model.title}
      </a>
      <p className='link-detail-line'>
        {shortUrl(model.url)} • {readableTime(model.timestamp)}
      </p>
      {addDivider && <LinkDivider />}
    </div>
  );
}

function shortUrl(url: string): string {
  const worldWideWebPattern = new RegExp('^w+\\d*\\.', 'gim');
  const hostname = new URL(url).hostname;
  const urlShort = hostname.replace(worldWideWebPattern, '');

  return urlShort;
}

function readableTime(timestamp: number): string {
  const timeDiff = Date.now() - timestamp;

  const timeUnits = [
    { unit: 'second', value: Math.floor(timeDiff / 1000) },
    { unit: 'minute', value: Math.floor(timeDiff / 60000) },
    { unit: 'hour', value: Math.floor(timeDiff / 3600000) },
    { unit: 'day', value: Math.floor(timeDiff / 86400000) },
    { unit: 'week', value: Math.floor(timeDiff / 604800000) },
  ];

  const rtf = new Intl.RelativeTimeFormat(navigator.language, { numeric: 'auto' });

  for (const { unit, value } of timeUnits) {
    if (value < 60) {
      return rtf.format(-value, unit as Intl.RelativeTimeFormatUnit);
    }
  }

  return '';
}
