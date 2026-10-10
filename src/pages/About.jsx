import { Breadcrumbs, SectionTitle } from '../components/ui.jsx';

const unique = [
  {
    title: 'Locally Inspired',
    text: 'Our perfumes are meticulously crafted to reflect the cultural heritage, traditions, and landscapes of various regions. From the vibrant streets of Marrakech to the serene cherry blossom gardens of Kyoto, each fragrance tells a unique story that resonates with the soul.',
  },
  {
    title: 'High-Quality Ingredients',
    text: 'We believe that the key to an extraordinary scent lies in the quality of its ingredients. That’s why we collaborate with expert perfumers who source the finest and ethically-sourced materials from around the world. We never compromise on the quality of our fragrances.',
  },
  {
    title: 'Personalized Service',
    text: 'We understand that choosing the perfect scent is a deeply personal experience. Our team of fragrance experts is always ready to assist you in finding a fragrance that complements your personality and style. Whether you’re exploring new scents or seeking to rediscover an old favorite, we’re here to guide you every step of the way.',
  },
];

export default function About() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />

      <section className="page-hero page-hero--arches">
        <div className="arches" aria-hidden="true"><span /><span /><span /></div>
        <div className="page-hero__content">
          <h1>About Us</h1>
          <p>
            At Local Face, we believe that perfumes are more than just scents; they are expressions of one&rsquo;s individuality
            and style. Our passion for exquisite fragrances led us to curate a collection that captures the essence of diverse
            personalities, bringing you an unparalleled olfactory experience.
          </p>
        </div>
      </section>

      <section className="story">
        <div className="container story__text">
          <SectionTitle>Our Story</SectionTitle>
          <p>
            Local Face Perfumes was founded by a group of perfume enthusiasts with a shared vision to create a haven for perfume
            lovers seeking authentic, locally-inspired fragrances. Inspired by the diversity and richness of cultures around the
            world, we set out on a journey to curate a collection of scents that capture the essence of each region. Our aim is to
            bring you closer to the heart and soul of different cultures through the art of perfumery.
          </p>
        </div>
        <div className="container">
          <img className="story__img" src="/img/story.jpg" alt="Perfume bottles on a lit shelf" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle>What Makes Us Unique</SectionTitle>
          <div className="unique">
            {unique.map((u) => (
              <div key={u.title}>
                <h4>{u.title}</h4>
                <p>{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container closing">
          <p>
            Join us on this olfactory adventure as we celebrate the diverse tapestry of scents from around the world. Discover
            the captivating aromas that embrace the essence of local cultures and connect with the beauty of our shared humanity.
          </p>
          <p>Thank you for being a part of our journey.</p>
          <p>With love and gratitude,<br />The Local Face Perfumes Team</p>
        </div>
      </section>
    </>
  );
}
