import { Link, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/ui.jsx';
import { ChevronLeft, ChevronRight, Twitter, Facebook, LinkedIn } from '../components/Icons.jsx';
import { articleBody as body, blogs } from '../data/blogs.js';
import NotFound from './NotFound.jsx';

export default function BlogPost() {
  const { slug } = useParams();
  const index = blogs.findIndex((b) => b.slug === slug);
  if (index === -1) return <NotFound />;

  const post = blogs[index];
  const prev = blogs[index - 1];
  const next = blogs[index + 1];

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }, { label: post.title }]} />

      <article className="post">
        <header className="container post__head">
          <p className="post__meta">{post.date}<br />{post.category}</p>
          <h1>{post.title}</h1>
        </header>

        <div className="container post__body">
          <img className="post__hero" src={post.hero ?? post.image} alt="" />

          <p>{post.featured ? body.intro : post.excerpt}</p>

          <h3>{body.personal.title}</h3>
          <p>{body.personal.text}</p>

          <div className="post__split">
            <img src={body.imageA} alt="" loading="lazy" />
            <div>
              {body.sideA.map((s) => (
                <div key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          {body.middle.map((s) => (
            <div key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}

          <div className="post__split post__split--rev">
            <div>
              {body.sideB.map((s) => (
                <div key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
            <img src={body.imageB} alt="" loading="lazy" />
          </div>

          <p>{body.outro}</p>
          <p>{body.signature[0]}<br />{body.signature[1]}</p>

          <div className="post__nav">
            {prev ? <Link to={`/blog/${prev.slug}`}><ChevronLeft /> Previous Post</Link> : <span />}
            <div className="post__share">
              <span>Share On</span>
              <div className="socials"><Twitter /><Facebook /><LinkedIn /></div>
            </div>
            {next ? <Link to={`/blog/${next.slug}`}>Next Post <ChevronRight /></Link> : <span />}
          </div>
        </div>
      </article>
    </>
  );
}
