import { img } from '../img.js';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel.jsx';
import { ArticleCard, ProductCard, SectionTitle } from '../components/ui.jsx';
import { bestSellers, collections } from '../data/products.js';
import { latestArticles } from '../data/blogs.js';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <h1>Elevate Your Spirit with Victory Scented Fragrances!</h1>
            <p>Shop now and embrace the sweet smell of victory with Local Face.</p>
            <Link to="/shop" className="btn btn--accent">Shop Now</Link>
          </div>
          <div className="hero__img">
            <img src={img('hero')} alt="Crystal perfume bottle" />
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="welcome">
        <div className="welcome__bg" style={{ backgroundImage: `url(${img('story')})` }} />
        <div className="container welcome__inner">
          <SectionTitle>Welcome to Local Face</SectionTitle>
          <p>
            Welcome to Local Face Perfumes, where the spirit of victory and triumph come alive through scents that empower and
            inspire. Our curated collection, aptly named &ldquo;Victory Scented,&rdquo; is a celebration of success and elegance,
            designed to unleash your victorious essence. Indulge in the sweet taste of triumph with captivating fragrances that
            tell the tale of your achievements. At Local Face, we believe that every victory deserves a signature scent, and we
            are dedicated to providing unforgettable fragrances that elevate your spirit and empower your journey.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="values">
        <div className="values__img">
          <img src={img('values')} alt="Perfume bottle with flowers" />
        </div>
        <div className="values__text">
          <SectionTitle accent={false}>Our Values</SectionTitle>
          <p>
            At Local Face, our perfume retail store is built on a foundation of passion and authenticity. We believe in
            celebrating the individuality of every customer, providing a diverse collection of scents that resonate with their
            unique personality and style. Our dedicated team of fragrance enthusiasts is committed to creating a welcoming and
            inclusive environment, where connections are forged, and inspiration thrives.
          </p>
          <p>
            Embracing sustainability and continuous learning, Local Face strives to be more than just a shopping destination; we
            are a community that inspires and empowers individuals on their fragrance journey.
          </p>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="section">
        <div className="container">
          <SectionTitle>Best selling products</SectionTitle>
          <Carousel items={bestSellers} perView={4} render={(p) => <ProductCard product={p} />} className="carousel--narrow" />
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="section section--tight">
        <div className="container">
          <SectionTitle>Our Collections</SectionTitle>
          <div className="collections">
            {collections.map((c) => (
              <Link to="/shop" key={c.name} className={`collection collection--${c.area}`}>
                <img src={c.image} alt="" loading="lazy" />
                <span>{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SALE */}
      <section className="section section--tight">
        <div className="container">
          <div className="sale">
            <div className="sale__text">
              <h2>Perfume Year-End Sale!<br />Up to 50% OFF</h2>
              <p>Discover an exquisite collection of premium perfumes at unbelievable prices during our exclusive Perfume Sale!</p>
              <Link to="/shop" className="btn btn--accent">Know More</Link>
            </div>
            <div className="sale__img">
              <img src={img('sale')} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="section">
        <div className="container">
          <SectionTitle>Latest Articles</SectionTitle>
          <Carousel items={latestArticles} perView={3} render={(b) => <ArticleCard post={b} />} />
        </div>
      </section>
    </>
  );
}
