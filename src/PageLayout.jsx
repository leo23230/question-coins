import { NavLink } from 'react-router-dom';
import FadeText from './FadeText';

const pages = [
  ['/one', '1'],
  ['/two', '2'],
  ['/three', '3'],
  ['/four', '4'],
  ['/five', '5'],
];

export default function PageLayout({ text }) {
  return (
    <main className="page-shell">
      <section className="text-stage">
        <FadeText>{text}</FadeText>
      </section>

      <nav className="page-nav" aria-label="Page navigation">
        {pages.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive ? 'page-link page-link-active' : 'page-link'
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </main>
  );
}
