import { Breadcrumbs } from '../components/ui.jsx';

const services = [
  {
    title: 'Personal Fragrance Consultations',
    image: '/img/srv1.jpg',
    text: 'Choosing the right fragrance can be a deeply personal experience. Our team of knowledgeable fragrance experts is here to guide you through this process. Whether you’re looking for a signature scent, a gift for a loved one, or need assistance in exploring new fragrance families, our consultants will take the time to understand your preferences and suggest the perfect matches.',
  },
  {
    title: 'Custom Fragrance Creation',
    image: '/img/srv2.jpg',
    text: 'Experience the art of bespoke perfumery with our custom fragrance creation service. Work closely with our skilled perfumers to craft a scent that is uniquely yours. From selecting individual notes to blending them into a harmonious symphony, we’ll help you bring your fragrance vision to life. Whether it’s a special occasion, a gift for someone dear, or simply a way to indulge in luxury, a custom-created perfume is an unforgettable experience.',
  },
  {
    title: 'Scented Gift Selection',
    image: '/img/srv3.jpg',
    text: 'Looking for a meaningful gift that leaves a lasting impression? Our scented gift selection service is designed to help you find the perfect fragrance gift for any occasion. Whether it’s a birthday, anniversary, or a gesture of appreciation, our experts will assist you in choosing a fragrance that perfectly conveys your sentiments and makes the recipient feel cherished.',
  },
  {
    title: 'Fragrance Events and Workshops',
    image: '/img/srv4.jpg',
    text: 'Join us for fragrance-centric events and workshops that celebrate the art of perfumery. Immerse yourself in the captivating world of scents, learn from experts, and discover the nuances of different fragrance families. These events are perfect for fragrance enthusiasts and novices alike, providing a unique opportunity to expand your olfactory knowledge.',
  },
  {
    title: 'Eco-friendly Initiatives',
    image: '/img/srv5.jpg',
    text: 'At Local Face, we are committed to sustainability and eco-conscious practices. As part of our services, we offer guidance on selecting environmentally friendly and cruelty-free fragrances. We partner with brands that share our values and are dedicated to making a positive impact on the planet.',
  },
  {
    title: 'Online Shopping Convenience',
    image: '/img/srv6.jpg',
    text: 'Explore our carefully curated collection of perfumes from the comfort of your home. Our user-friendly website offers a seamless online shopping experience, complete with detailed product descriptions and customer reviews. You can also reach out to our customer support team for any assistance during your shopping journey.',
  },
];

export default function Services() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />

      <section className="page-hero page-hero--blur">
        <div className="page-hero__bg" style={{ backgroundImage: 'url(/img/srv4.jpg)' }} />
        <div className="page-hero__content">
          <h1>Our Services</h1>
          <p>
            At Local Face, we are dedicated to providing you with a delightful and immersive perfume shopping experience. Our
            services are tailored to ensure that you find the perfect fragrance that complements your unique personality and
            style. We take pride in offering a range of services that go beyond just selling perfumes, aiming to make your journey
            with us truly special.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container services">
          {services.map((s, i) => (
            <div key={s.title} className={`service ${i % 2 ? 'service--rev' : ''}`}>
              <div className="service__text">
                <span className="service__num">{String(i + 1).padStart(2, '0')}.</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <div className="service__img"><img src={s.image} alt="" loading="lazy" /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container closing">
          <p>
            At Local Face, our passion for perfumery drives us to go above and beyond to serve you better. We invite you to
            experience our exceptional services and indulge in the world of luxurious scents. Let us be your trusted fragrance
            destination, where your olfactory dreams come to life.
          </p>
          <p>
            If you have any questions or need assistance, please do not hesitate to reach out to our friendly team. We&rsquo;re
            here to make your fragrance exploration a truly memorable one.
          </p>
          <p>Your Local Face Team</p>
        </div>
      </section>
    </>
  );
}
