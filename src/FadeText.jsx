import { useLocation } from 'react-router-dom';

export default function FadeText({ children }) {
  const location = useLocation();
  const words = String(children).trim().split(/\s+/);

  return (
    <h1 className="fade-text" key={location.pathname} aria-label={children}>
      {words.map((word, index) => (
        <span
          className="fade-word"
          style={{ '--delay': `${index * 90}ms` }}
          key={`${word}-${index}`}
          aria-hidden="true"
        >
          {word}&nbsp;
        </span>
      ))}
    </h1>
  );
}
