import { img } from '../img.js';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs, ProductCard, SectionTitle } from '../components/ui.jsx';
import { ChevronDown, ChevronLeft, ChevronRight } from '../components/Icons.jsx';
import { filters, products } from '../data/products.js';

const PER_PAGE = 8;

const filterLabels = {
  collection: 'Collections',
  family: 'Fragrance Families',
  gender: 'Gender',
  occasion: 'Occasions',
};

const sorts = {
  popular: { label: 'Most popular', fn: (a, b) => b.reviews - a.reviews },
  priceAsc: { label: 'Price: low to high', fn: (a, b) => a.price - b.price },
  priceDesc: { label: 'Price: high to low', fn: (a, b) => b.price - a.price },
  rating: { label: 'Top rated', fn: (a, b) => b.rating - a.rating },
};

function Dropdown({ label, options, value, onChange, align = 'left' }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div className={`dropdown ${value ? 'dropdown--active' : ''}`} ref={ref}>
      <button className="dropdown__btn" onClick={() => setOpen((o) => !o)}>
        {value ? options.find((o) => o.value === value)?.label ?? value : label} <ChevronDown />
      </button>
      {open && (
        <div className={`dropdown__menu dropdown__menu--${align}`}>
          {options.map((o) => (
            <button
              key={o.value}
              className={o.value === value ? 'is-selected' : ''}
              onClick={() => {
                onChange(o.value === value ? '' : o.value);
                setOpen(false);
              }}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Products() {
  const [active, setActive] = useState({ collection: '', family: '', gender: '', occasion: '' });
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);

  const list = useMemo(() => {
    let l = products.filter((p) => Object.entries(active).every(([k, v]) => !v || p[k] === v));
    if (sort) l = [...l].sort(sorts[sort].fn);
    return l;
  }, [active, sort]);

  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  const current = Math.min(page, pages);
  const shown = list.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  const anyFilter = Object.values(active).some(Boolean);

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Products' }]} />

      <section className="section section--top">
        <div className="container">
          <SectionTitle>Best Selling Products</SectionTitle>

          <div className="filters">
            <div className="filters__group">
              <span className="filters__label">Filter by</span>
              {Object.keys(filters).map((k) => (
                <Dropdown
                  key={k}
                  label={filterLabels[k]}
                  options={filters[k].map((v) => ({ value: v, label: v }))}
                  value={active[k]}
                  onChange={(v) => {
                    setActive((a) => ({ ...a, [k]: v }));
                    setPage(1);
                  }}
                />
              ))}
              {anyFilter && (
                <button className="filters__clear" onClick={() => setActive({ collection: '', family: '', gender: '', occasion: '' })}>
                  Clear
                </button>
              )}
            </div>
            <Dropdown
              label="Sort by"
              align="right"
              options={Object.entries(sorts).map(([value, s]) => ({ value, label: s.label }))}
              value={sort}
              onChange={setSort}
            />
          </div>

          {shown.length ? (
            <div className="product-grid">
              {shown.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <p className="empty">No perfumes match these filters.</p>
          )}

          <div className="pager">
            <button onClick={() => setPage(current - 1)} disabled={current === 1} aria-label="Previous page"><ChevronLeft /></button>
            <span>Page {current} of {pages}</span>
            <button onClick={() => setPage(current + 1)} disabled={current === pages} aria-label="Next page"><ChevronRight /></button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle accent={false}>Special Offers</SectionTitle>

          <div className="offer offer--aqua">
            <div className="offer__img"><img src={img('aqua')} alt="Aqua Serenity perfume" /></div>
            <div className="offer__text">
              <h3>Limited Time Offer: 20% OFF on Aqua Serenity Perfume!</h3>
              <h4>Aqua Serenity</h4>
              <p className="offer__tag">Embrace the Tranquil Tides</p>
              <p>Immerse yourself in the calming embrace of Aqua Serenity, a captivating fragrance that evokes the essence of water.</p>
              <Link to="/shop/decadent-opal" className="btn btn--outline btn--sm">Know More</Link>
            </div>
          </div>

          <div className="offer offer--gold">
            <div className="offer__text">
              <h3>Limited Time Offer: 25% OFF on Golden Angel Perfume!</h3>
              <h4>Golden Angel</h4>
              <p className="offer__tag">Unleash Your Divine Glow</p>
              <p>Indulge in the divine allure of Golden Angel, a fragrance that embodies celestial elegance and radiance.</p>
              <Link to="/shop/the-golden-legacy" className="btn btn--outline btn--sm">Know More</Link>
            </div>
            <div className="offer__img"><img src={img('angel')} alt="Golden Angel perfume" /></div>
          </div>
        </div>
      </section>
    </>
  );
}
