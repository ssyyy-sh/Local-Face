import { img } from '../img.js';

export const blogs = [
  {
    slug: 'finding-your-signature-scent',
    title: 'Finding Your Signature Scent: A Guide to Perfume Personalities',
    excerpt:
      'Embark on a journey of self-discovery as we delve into the concept of perfume personalities. From bold and adventurous to elegant and timeless, there’s a fragrance that perfectly complements your unique essence. Let us help you find your signature scent, a fragrant expression of your unique style.',
    image: img('blog4'),
    category: 'Guides',
    date: 'March 12, 2023',
  },
  {
    slug: 'art-of-curating-a-luxury-perfume-collection',
    title: 'The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories',
    excerpt:
      'A luxury perfume collection is not just an assortment of fragrances; it is a reflection of one’s taste, personality, and experiences. Each bottle holds a unique olfactory journey, crafted with the finest ingredients and artistic mastery.',
    image: img('blog2'),
    hero: img('post_hero'),
    category: 'Perfume Collections',
    date: 'January 5, 2023',
    featured: true,
  },
  {
    slug: 'decoding-fragrance-notes',
    title: 'Decoding Fragrance Notes: Unraveling the Symphony of Scents',
    excerpt:
      'Ever wondered how perfumers compose their masterpieces? Unravel the mystery behind fragrance notes — top, middle, and base — and learn how each layer contributes to the overall olfactory experience of a perfume. Get ready to appreciate your favorite scents on a whole new level!',
    image: img('blog6'),
    category: 'Fragrance Notes',
    date: 'February 20, 2023',
  },
  {
    slug: 'soothing-symphony-of-lavender',
    title: 'The Soothing Symphony of Lavender Perfumes: Unlocking the Secrets of a Fragrant Elixir',
    excerpt:
      'Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many.',
    image: img('blog1'),
    category: 'Ingredients',
    date: 'December 14, 2022',
  },
  {
    slug: 'journey-through-time',
    title: 'A Journey Through Time: Unearthing Perfumery’s Rich History',
    excerpt:
      'In our blog collection, we invite you to embark on a journey through time, where we explore the fascinating history of perfumery. From ancient civilizations to modern-day masterpieces, we unravel the tales of how scents have adorned humanity throughout the ages.',
    image: img('blog5'),
    category: 'History',
    date: 'November 2, 2022',
  },
  {
    slug: 'timeless-elegance-of-rose-perfumes',
    title: 'The Timeless Elegance of Rose Perfumes: Unveiling the Queen of Flowers in Fragrance',
    excerpt:
      'Rose, often referred to as the “Queen of Flowers,” has held a special place in human culture and history for centuries. Beyond its captivating beauty, this iconic bloom has also inspired perfumers to create some of the most timeless and exquisite fragrances in the world.',
    image: img('blog3'),
    category: 'Ingredients',
    date: 'October 18, 2022',
  },
];

export const latestArticles = [blogs[3], blogs[1], blogs[5], blogs[0], blogs[2], blogs[4]];

/* Body of the featured article (same structure is reused for the other posts). */
export const articleBody = {
  intro:
    'Welcome, fragrance aficionados, to an exquisite journey into the captivating world of luxury perfume collections. A symphony of scents awaits as we delve into the art of curating a fragrance collection that reflects your essence, evokes cherished memories, and embraces the finest olfactory masterpieces. Just as a maestro conducts an orchestra, we invite you to become the conductor of your very own perfume symphony.',
  personal: {
    title: 'The Perfume Collection: A Personal Overture',
    text: 'A perfume collection is more than an assortment of fragrances; it is a reflection of your personality, your life’s chapters, and the emotions that define you. As you embark on this aromatic voyage, consider what scents resonate with your soul, whisking you away to cherished moments and uncharted dreams. Each fragrance in your collection will tell a unique story, narrated by the notes that gracefully dance upon your skin.',
  },
  sideA: [
    {
      title: 'The Overture: Discovering Your Signature Scent',
      text: 'The journey to curating a luxury perfume collection begins with finding your signature scent—the one that feels like an olfactory extension of your being. Take time to explore different fragrance families, from opulent florals to mysterious orientals, to discover the notes that harmonize perfectly with your skin chemistry. This will be the foundation upon which you build your enchanting symphony of scents.',
    },
    {
      title: 'Commemorating Milestones',
      text: 'Just as the notes of a melody create beautiful harmonies, certain fragrances can encapsulate significant moments in your life. Whether it’s a celebration of love, a momentous achievement, or a cherished memory with a loved one, select perfumes that become olfactory milestones. With each spritz, you’ll be transported back in time, reliving the emotions that weave your life’s narrative.',
    },
  ],
  middle: [
    {
      title: 'Exploring the Fragrance Palette',
      text: 'As you continue composing your collection, it’s essential to explore a diverse fragrance palette. Include scents that embody contrasting moods and evoke emotions ranging from serenity to exuberance. From the freshness of citrusy top notes to the warm embrace of rich base notes, each perfume adds a unique hue to your olfactory canvas.',
    },
    {
      title: 'Embracing Niche Gems',
      text: 'Just as a symphony benefits from unique instruments, your collection can be enriched by the discovery of niche perfumes and artisanal creations. Venture beyond the mainstream, and explore the creations of master perfumers who pour their heart and soul into crafting distinctive scents. These hidden gems add an air of exclusivity to your repertoire.',
    },
  ],
  sideB: [
    {
      title: 'Perfume as an Art Form',
      text: 'Perfume is not merely a product; it is an art form that captivates the senses and transcends time. Take a moment to appreciate the artistry behind each perfume, the skill of the perfumer in blending notes, and the emotions they convey through fragrance. Embrace the poetry in each bottle, and your collection will become an ode to the beauty of scent.',
    },
    {
      title: 'Displaying Your Symphony of Scents',
      text: 'The grand finale of your perfume symphony lies in the elegant presentation of your collection. A tastefully curated display showcases the artistry of perfume bottles, transforming your collection into an aesthetic marvel. Whether nestled on a vintage vanity or arranged in a custom-made perfume cabinet, your fragrant ensemble becomes an exquisite visual and olfactory experience.',
    },
  ],
  outro:
    'Dear perfume connoisseurs, may this guide inspire you to embark on a journey of curating a luxury perfume collection that harmonizes with your soul. As you add each new fragrance to your symphony, you’ll find that your collection becomes more than an assemblage of scents—it becomes a masterpiece of memories, emotions, and the art of perfumery.',
  signature: ['Happy curating!', 'Kiara Smith'],
  imageA: img('post_a'),
  imageB: img('post_b'),
};
