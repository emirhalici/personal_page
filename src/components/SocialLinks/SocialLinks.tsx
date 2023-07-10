import './SocialLinks.css';
import { FaMediumM, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import React from 'react';

export default function SocialLinks() {
  return (
    <div className='root-social-links'>
      <SocialIcon
        icon={<FaLinkedinIn />}
        url='https://www.linkedin.com/in/emirhalici/'
        name='LinkedIn'
      />
      <SocialIcon icon={<FaGithub />} url='https://github.com/emirhalici/' name='Github' />
      <SocialIcon icon={<FaMediumM />} url='https://medium.com/@emirhalici' name='Medium' />
    </div>
  );
}

function SocialIcon(props: { icon: React.ReactElement; url: string; name: string }) {
  return (
    <a href={props.url} target='_blank' rel='noopener noreferrer' className='social-icon'>
      <span className='social-icon-inner'>{React.cloneElement(props.icon, { size: 22 })}</span>
    </a>
  );
}
