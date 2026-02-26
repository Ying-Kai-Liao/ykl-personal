import { useState, useEffect } from 'react';
import Grainient from './Grainient';

const themes = {
  light: { color1: '#c4d4e8', color2: '#a8b8d0', color3: '#dde4ed' },
  dark: { color1: '#1a2333', color2: '#0f1a2b', color3: '#1e2a3a' },
};

export default function GrainientBg(props) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const check = () => setDark(document.documentElement.classList.contains('dark'));
    check();

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const colors = dark ? themes.dark : themes.light;

  return (
    <Grainient
      key={dark ? 'dark' : 'light'}
      {...colors}
      {...props}
    />
  );
}
