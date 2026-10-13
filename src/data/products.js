import { img } from '../img.js';

export const products = [
  { id: 'luxurious-elixir-rough', name: 'Luxurious Elixir Rough', price: 220, rating: 4, reviews: 60, image: img('p1'), collection: 'Vintage Treasures', family: 'Woody', gender: 'Unisex', occasion: 'Evening' },
  { id: 'the-golden-legacy', name: 'The Golden Legacy', price: 160, rating: 4, reviews: 103, image: img('p2'), collection: 'Designer Delights', family: 'Amber', gender: 'Women', occasion: 'Special Occasions' },
  { id: 'luxurious-elixir', name: 'Luxurious Elixir', price: 250, rating: 5, reviews: 90, image: img('p3'), detailImage: img('detail'), collection: 'Limited Edition', family: 'Amber', gender: 'Unisex', occasion: 'Evening' },
  { id: 'luxurious-essence', name: 'Luxurious Essence', price: 260, rating: 4, reviews: 212, image: img('p4'), collection: 'Limited Edition', family: 'Oriental', gender: 'Men', occasion: 'Special Occasions' },
  { id: 'aurum-aura', name: 'Aurum Aura', price: 200, rating: 4, reviews: 103, image: img('p5'), collection: 'Modern Classics', family: 'Floral', gender: 'Women', occasion: 'Daytime' },
  { id: 'gleaming-gilt', name: 'Gleaming Gilt', price: 160, rating: 4, reviews: 103, image: img('p6'), collection: 'Designer Delights', family: 'Citrus', gender: 'Women', occasion: 'Daytime' },
  { id: 'gilded-elixir-rough', name: 'Gilded Elixir Rough', price: 170, rating: 4.5, reviews: 103, image: img('p7'), collection: 'Vintage Treasures', family: 'Woody', gender: 'Men', occasion: 'Evening' },
  { id: 'golden-luminary', name: 'Golden Luminary', price: 120, rating: 4, reviews: 103, image: img('p8'), collection: 'Travel Essentials', family: 'Citrus', gender: 'Unisex', occasion: 'Daytime' },
  { id: 'decadent-opal', name: 'Decadent Opal', price: 160, rating: 5, reviews: 40, image: img('p9'), collection: 'Seasonal Sensations', family: 'Amber', gender: 'Women', occasion: 'Evening' },
  { id: 'gilded-elixir', name: 'Gilded Elixir', price: 200, rating: 5, reviews: 10, image: img('p10'), collection: 'Limited Edition', family: 'Oriental', gender: 'Men', occasion: 'Special Occasions' },
  { id: 'glamourous-gilt', name: 'Glamourous Gilt', price: 160, rating: 4.5, reviews: 121, image: img('p11'), collection: 'Modern Classics', family: 'Floral', gender: 'Women', occasion: 'Daytime' },
  { id: 'luxury-enigma', name: 'Luxury Enigma', price: 190, rating: 5, reviews: 103, image: img('p12'), collection: 'Travel Essentials', family: 'Woody', gender: 'Men', occasion: 'Evening' },
];

export const bestSellers = products.slice(0, 4);

export const filters = {
  collection: ['Designer Delights', 'Travel Essentials', 'Special Occasions', 'Seasonal Sensations', 'Vintage Treasures', 'Limited Edition', 'Modern Classics'],
  family: ['Amber', 'Citrus', 'Floral', 'Oriental', 'Woody'],
  gender: ['Women', 'Men', 'Unisex'],
  occasion: ['Daytime', 'Evening', 'Special Occasions'],
};

export const collections = [
  { name: 'Designer Delights Collection', image: img('col_designer'), area: 'a' },
  { name: 'Travel Essentials Collection', image: img('col_travel'), area: 'b' },
  { name: 'Special Occasions Collection', image: img('col_special'), area: 'c' },
  { name: 'Seasonal Sensations Collection', image: img('col_seasonal'), area: 'd' },
  { name: 'Vintage Treasures Collection', image: img('col_vintage'), area: 'e' },
  { name: 'Limited Edition Treasures', image: img('col_limited'), area: 'f' },
  { name: 'Modern Classics Collection', image: img('col_modern'), area: 'g' },
];

export const reviews = [
  {
    name: 'Jack Smith',
    date: 'June 03, 2023',
    avatar: '#d9534f',
    text: 'Very lovely fragrance. Would recommend to individuals looking for a combination of sweetness and elegance in perfume. I like floral perfume, and this one is lovely, it’s not overpowering. Nice, pleasant scent. I am happy with purchase.',
  },
  {
    name: 'Ashley',
    date: 'January 05, 2023',
    avatar: '#3aa6a0',
    text: 'I like floral perfume, and this one is lovely, it’s not overpowering. Nice, pleasant scent. I am happy with purchase.',
  },
  {
    name: 'Lauri Jess',
    date: 'October 05, 2022',
    avatar: '#c98a5a',
    text: 'I tried a sample and fell in love with this fragrance so I had to buy my first bottle. This fragrance is my treat for me. It helps to create a good mood. During a stressful day really nice to stop a few moments and revisit the scent from my wrists. I really love the fact that it doesn’t take the air out of the room. Some scents are so overbearing but not this one. Try it you just might really love it.',
  },
];
