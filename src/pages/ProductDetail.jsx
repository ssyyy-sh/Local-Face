import { img } from '../img.js';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs, ProductCard, SectionTitle, Stars } from '../components/ui.jsx';
import { HeartIcon, PlusIcon } from '../components/Icons.jsx';
import { products, reviews } from '../data/products.js';
import { useShop } from '../context/ShopContext.jsx';
import NotFound from './NotFound.jsx';

const sizes = [
  { id: '100', label: '100 ml', extra: 0 },
  { id: '150', label: '150 ml', extra: 60 },
];

const notes = [
  { title: 'Top Note', text: 'Citrus Accord, Sun-kissed Fruits', image: img('note1') },
  { title: 'Heart Note', text: 'Golden Roses, Rare Blooms', image: img('note2') },
  { title: 'Base Note', text: 'Amber, Vanilla, Sandalwood', image: img('note3') },
];

export default function ProductDetail() {
  const { id } = useParams();
  return <ProductView key={id} id={id} />;
}

function ProductView({ id }) {
  const product = products.find((p) => p.id === id);
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const [size, setSize] = useState('100');
  const [qty, setQty] = useState(1);
  const [slide, setSlide] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) return <NotFound />;

  const image = product.detailImage ?? product.image;
  const gallery = [image, product.image];
  const price = product.price + sizes.find((s) => s.id === size).extra;
  const inWishlist = wishlist.includes(product.id);
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const add = () => {
    addToCart(product.id, size, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Products', to: '/shop' }, { label: product.name }]} />

      <section className="container pd">
        <div className="pd__gallery">
          <div className="pd__main">
            <img src={gallery[slide]} alt={product.name} />
          </div>
          <div className="dots">
            {gallery.map((_, i) => (
              <button key={i} className={i === slide ? 'is-active' : ''} onClick={() => setSlide(i)} aria-label={`Image ${i + 1}`} />
            ))}
          </div>
        </div>

        <div className="pd__info">
          <h1>{product.name}</h1>
          <p className="pd__desc">
            Step into a world of unparalleled opulence with {product.name}, an exquisite fragrance that weaves an enchanting
            symphony of gold and luxury. This gilded elixir is a celebration of sophistication, crafted with the finest essences
            and imbued with the allure of precious golden hues.
          </p>
          <div className="pd__rating">
            <Stars value={product.rating} count={product.reviews} />
            <a href="#reviews">Reviews and Ratings</a>
          </div>

          <div className="pd__sizes">
            {sizes.map((s) => (
              <button key={s.id} className={`pd__size ${size === s.id ? 'is-active' : ''}`} onClick={() => setSize(s.id)}>
                <img src={image} alt="" />
                <span>{s.label}</span>
              </button>
            ))}
          </div>

          <p className="pd__price">$ {price.toFixed(2)}</p>

          <div className="pd__row">
            <span className="pd__label">Qty</span>
            <div className="qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase">+</button>
            </div>
            <button className={`pd__wish ${inWishlist ? 'is-active' : ''}`} onClick={() => toggleWishlist(product.id)}>
              Whish list <HeartIcon filled={inWishlist} width={18} height={18} />
            </button>
          </div>

          <button className="btn btn--light pd__add" onClick={add}>{added ? 'Added to Bag ✓' : 'Add to Bag'}</button>
          <p className="pd__afterpay"><span className="afterpay">afterpay</span> Shop now and pay later with 4 payments</p>
        </div>
      </section>

      <section className="container pd-text">
        <h2>Product Details</h2>
        <p>
          Step into a world of unparalleled opulence with {product.name}, an exquisite fragrance that weaves an enchanting
          symphony of gold and luxury. This gilded elixir is a celebration of sophistication, crafted with the finest essences and
          imbued with the allure of precious golden hues. From the first spritz to the lingering dry-down, {product.name} promises
          an intoxicating experience that embodies the essence of lavish indulgence.
        </p>

        <h2>The Golden Overture</h2>
        <p>
          {product.name} opens with a grand flourish of radiant citrus and sun-kissed fruits, reminiscent of golden rays caressing
          your senses. The opulent heart unfolds with a bouquet of velvety roses and rare blooms, their essence radiating with the
          allure of gilded petals. As the fragrance settles, a sumptuous blend of warm amber, creamy vanilla, and smooth sandalwood
          evokes a sense of ultimate luxury and refinement.
        </p>

        <h2>Key Notes</h2>
        <div className="notes">
          {notes.map((n) => (
            <div key={n.title} className="note">
              <h4>{n.title}</h4>
              <p>{n.text}</p>
              <img src={n.image} alt="" loading="lazy" />
            </div>
          ))}
        </div>

        <h2>The Heart of Elegance</h2>
        <p>
          {product.name} is the embodiment of elegance, drawing you into a world where glamour and prestige unite. With every
          spritz, the fragrance weaves a tapestry of glistening gold around you, enhancing your allure and capturing the admiration
          of those around.
        </p>

        <h2>The Ultimate Expression of Luxury</h2>
        <p>
          {product.name} makes an extraordinary gift, an expression of your discerning taste and admiration for the extraordinary.
          Delight your loved ones with this lavish elixir, a symbol of admiration and adoration.
        </p>
      </section>

      <section className="container reviews" id="reviews">
        <SectionTitle>Reviews</SectionTitle>
        <div className="reviews__summary">
          <div className="bars">
            {[5, 4, 3, 2, 1].map((n) => (
              <div key={n} className="bars__row">
                <span>{n} stars</span>
                <div className="bars__track"><div className="bars__fill" style={{ width: n === 5 ? '100%' : '0%' }} /></div>
                <span>{n === 5 ? '100%' : '0%'}</span>
              </div>
            ))}
          </div>
          <div className="reviews__score">
            <Stars value={5} />
            <p className="reviews__big">5 out of 5</p>
            <p>99% of reviewers recommend this product</p>
            <div className="reviews__meta">
              <span>{product.reviews} reviews</span>
              <button><PlusIcon /> Add a Review</button>
            </div>
          </div>
        </div>

        <div className="reviews__list">
          {reviews.map((r) => (
            <div key={r.name} className="review">
              <div className="review__avatar" style={{ background: r.avatar }}>{r.name[0]}</div>
              <div>
                <Stars value={5} />
                <p>{r.text}</p>
                <div className="review__meta"><span>{r.name}</span><span>{r.date}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle>You May Also Like</SectionTitle>
          <div className="product-grid">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
