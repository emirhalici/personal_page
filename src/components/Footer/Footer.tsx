import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer-root'>
      <p className='quote'>&quot;Encumbered forever by desire and ambition&quot;</p>
      <p>© {currentYear} · Emir Halıcı</p>
    </div>
  );
}
