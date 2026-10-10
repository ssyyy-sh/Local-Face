import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from './Icons.jsx';

/* Simple paged carousel: shows `perView` items, arrows move by one. */
export default function Carousel({ items, perView = 4, render, className = '' }) {
  const [visible, setVisible] = useState(perView);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisible(w < 600 ? 1 : w < 960 ? Math.min(2, perView) : perView);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [perView]);

  const max = Math.max(0, items.length - visible);
  const s = Math.min(start, max);
  const shown = items.slice(s, s + visible);

  return (
    <div className={`carousel ${className}`}>
      <button className="carousel__arrow" onClick={() => setStart(Math.max(0, s - 1))} disabled={s === 0} aria-label="Previous">
        <ChevronLeft />
      </button>
      <div className="carousel__track" style={{ gridTemplateColumns: `repeat(${visible}, 1fr)` }}>
        {shown.map((it, i) => <div key={s + i}>{render(it)}</div>)}
      </div>
      <button className="carousel__arrow" onClick={() => setStart(Math.min(max, s + 1))} disabled={s >= max} aria-label="Next">
        <ChevronRight />
      </button>
    </div>
  );
}
