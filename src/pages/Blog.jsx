import { useMemo, useState } from 'react';
import { ArticleCard, Breadcrumbs } from '../components/ui.jsx';
import { SearchIcon, ChevronDown } from '../components/Icons.jsx';
import { blogs } from '../data/blogs.js';

const categories = ['All', ...new Set(blogs.map((b) => b.category))];

export default function Blog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('newest');
  const [visible, setVisible] = useState(6);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    let l = blogs.filter(
      (b) => (category === 'All' || b.category === category) && (!q || (b.title + b.excerpt).toLowerCase().includes(q))
    );
    l = [...l].sort((a, b) => (sort === 'newest' ? 1 : -1) * (new Date(b.date) - new Date(a.date)));
    return l;
  }, [query, category, sort]);

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />

      <section className="section section--top">
        <div className="container">
          <h1 className="page-title">Our Blog Collection</h1>

          <div className="blog-intro">
            <div>
              <h2>Discover the Art of Perfumery</h2>
              <p>
                Welcome to Local Face&rsquo;s Perfumery Blog Collection! Here, we invite you to immerse yourself in the
                captivating world of fragrances, where each blog post is a sensory journey that unveils the magic and allure of
                perfumes. Our team of fragrance enthusiasts, industry experts, and perfumers have curated an array of
                captivating articles to enrich your understanding and appreciation for these olfactory delights.
              </p>
              <p>
                At Local Face, we believe that perfumery is an extraordinary fusion of art, science, and emotion. Our passion
                for exquisite fragrances has inspired us to curate a treasure trove of blog posts, each designed to ignite your
                senses and deepen your appreciation for these olfactory wonders.
              </p>
            </div>
            <img src="/img/collage.jpg" alt="" />
          </div>

          <div className="blog-tools">
            <label className="search">
              <input placeholder="Search here" value={query} onChange={(e) => setQuery(e.target.value)} />
              <SearchIcon width={16} height={16} />
            </label>
            <div className="blog-tools__selects">
              <label className="select">
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  {categories.map((c) => <option key={c} value={c}>{c === 'All' ? 'Filter by Category' : c}</option>)}
                </select>
                <ChevronDown />
              </label>
              <label className="select">
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="newest">Sort by: Newest</option>
                  <option value="oldest">Sort by: Oldest</option>
                </select>
                <ChevronDown />
              </label>
            </div>
          </div>

          {list.length ? (
            <div className="article-grid">
              {list.slice(0, visible).map((b) => <ArticleCard key={b.slug} post={b} />)}
            </div>
          ) : (
            <p className="empty">Nothing found for &ldquo;{query}&rdquo;.</p>
          )}

          {visible < list.length && (
            <div className="center">
              <button className="btn btn--accent" onClick={() => setVisible((v) => v + 3)}>Load More</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
