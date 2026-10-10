import { Link } from 'react-router-dom';
import { Star } from './Icons.jsx';

export function Breadcrumbs({ items }) {
  return (
    <div className="container">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        {items.map((it, i) => (
          <span key={i}>
            {i > 0 && <span className="breadcrumbs__sep">/</span>}
            {it.to ? <Link to={it.to}>{it.label}</Link> : <span className="breadcrumbs__current">{it.label}</span>}
          </span>
        ))}
      </nav>
    </div>
  );
}

export function Stars({ value, count }) {
  return (
    <span className="stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} fill={Math.max(0, Math.min(1, value - i))} />
      ))}
      {count != null && <span className="stars__count">({count})</span>}
    </span>
  );
}

export function ProductCard({ product }) {
  return (
    <Link to={`/shop/${product.id}`} className="product-card">
      <div className="product-card__img">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <h3 className="product-card__name">{product.name}</h3>
      <Stars value={product.rating} count={product.reviews} />
      <p className="product-card__price">
        <span>$ {product.price.toFixed(2)}</span> <small>100ml</small>
      </p>
    </Link>
  );
}

export function ArticleCard({ post }) {
  return (
    <article className="article-card">
      <Link to={`/blog/${post.slug}`} className="article-card__img">
        <img src={post.image} alt="" loading="lazy" />
      </Link>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <Link to={`/blog/${post.slug}`} className="btn btn--outline btn--sm">Read More</Link>
    </article>
  );
}

export function SectionTitle({ children, accent = true, as: Tag = 'h2' }) {
  return <Tag className={`section-title ${accent ? 'section-title--accent' : ''}`}>{children}</Tag>;
}
